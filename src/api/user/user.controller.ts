import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async profile(@Request() { user }: any) {
    return this.userService.findOne(user.sub);
  }

  @Get('users')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.userService.findAll();
  }

  @Get('id/:id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: UserEntity })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.softRemove(id);
  // }
}
