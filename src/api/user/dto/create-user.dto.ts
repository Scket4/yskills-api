import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsPositive,
} from 'class-validator';

export class CreateUserDto {
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
  password: string;
  @ApiProperty({
    required: false,
    description: 'User id in Telegram messanger',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  telegramId?: number;
}
