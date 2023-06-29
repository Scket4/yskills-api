import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    required: true,
    description: 'Email address of the user. Must be unique.',
    uniqueItems: true,
  })
  @IsEmail()
  email: string;
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(4)
  password: string;
}
