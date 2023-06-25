import { ApiProperty } from '@nestjs/swagger';
export class UserEntity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ default: 3827189 })
  telegramId: number;
  @ApiProperty({ default: false })
  isVerified: boolean;
}
