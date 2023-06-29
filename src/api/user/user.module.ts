import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { jwtConstants } from '../auth/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3000s' },
    }),
  ],
  exports: [UserService],
})
export class UserModule {}
