import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    required: true,
    description: 'Email address of the user. Must be unique.',
    uniqueItems: true,
  })
  @IsEmail()
  email: string;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
