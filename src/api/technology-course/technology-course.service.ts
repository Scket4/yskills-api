import { Injectable } from '@nestjs/common';
import { Prisma, Technology, TechnologyCourse } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TechnologyCourseService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createTechnologyDto: Prisma.TechnologyCourseCreateInput,
  ): Promise<TechnologyCourse> {
    return this.prisma.technologyCourse.create({
      data: createTechnologyDto,
    });
  }

  findAll(): Promise<TechnologyCourse[] | []> {
    return this.prisma.technologyCourse.findMany();
  }

  findOne(id: string): Promise<TechnologyCourse | null> {
    return this.prisma.technologyCourse.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateTechnologyDto: Prisma.TechnologyCourseUpdateInput,
  ): Promise<TechnologyCourse> {
    return this.prisma.technologyCourse.update({
      where: { id },
      data: updateTechnologyDto,
    });
  }

  remove(id: string) {
    return this.prisma.technologyCourse.delete({
      where: { id },
    });
  }
}
