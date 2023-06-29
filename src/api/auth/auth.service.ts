import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

export type TPayload = {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
};

type TTokens = {
  access_token: string;
  refresh_token: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(userData: SignUpDto): Promise<TTokens> {
    const isExist = await this.usersService.findOneByEmail(userData.email);
    if (isExist)
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.CONFLICT,
      );

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(userData.password, salt);

    const user = await this.usersService.create({
      ...userData,
      password: hash,
    });

    const payload = { sub: user.id, email: user.email };

    return this.getTokens(payload);
  }

  async signIn(email: string, pass: string): Promise<TTokens> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Wrong password or email');
    }

    const payload = { sub: user.id, email: user.email };
    return this.getTokens(payload);
  }

  async getTokens(payload: TPayload): Promise<TTokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: '5h',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
