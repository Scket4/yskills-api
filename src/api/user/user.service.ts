import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    // Логика по отправке подтверждения на почту
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[] | []> {
    const users = await this.prisma.user.findMany({
      where: {
        deleted: false,
        verified: true,
      },
    });

    if (!users.length)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return user;
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  // async softRemove(id: string): Promise<User> {
  // const projects = await this.prisma.project.findMany({
  //   where: { authorId: id },
  // });
  //
  // await this.prisma.action.updateMany({
  //   where: { projectId: { in: projects.map((p) => p.id) } },
  //   data: {
  //     deleted: true,
  //   },
  // });
  //
  // await this.prisma.project.updateMany({
  //   where: { authorId: id },
  //   data: {
  //     deleted: true,
  //   },
  // });
  //
  // return this.prisma.user.update({
  //   where: { id },
  //   data: { deleted: true },
  // });
  // }
}
