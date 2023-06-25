import { Injectable } from '@nestjs/common';
import { Prisma, UserCourse } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserCourseService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createTechnologyDto: Prisma.UserCourseCreateInput,
  ): Promise<UserCourse> {
    return this.prisma.userCourse.create({
      data: createTechnologyDto,
    });
  }

  findAll(): Promise<UserCourse[] | []> {
    return this.prisma.userCourse.findMany();
  }

  findOne(id: string): Promise<UserCourse | null> {
    return this.prisma.userCourse.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateTechnologyDto: Prisma.UserCourseUpdateInput,
  ): Promise<UserCourse> {
    return this.prisma.userCourse.update({
      where: { id },
      data: updateTechnologyDto,
    });
  }

  remove(id: string) {
    return this.prisma.userCourse.delete({
      where: { id },
    });
  }
}
