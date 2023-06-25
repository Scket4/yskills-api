import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @ApiProperty()
  name?: string;
  @IsString()
  @ApiProperty()
  lastName?: string;
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  telegramId?: number;
  @ApiProperty()
  @IsString()
  password?: string;
  @ApiProperty()
  @IsString()
  email?: string;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isVerified?: boolean;
}
