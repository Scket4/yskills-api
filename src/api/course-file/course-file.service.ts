import { Injectable } from '@nestjs/common';
import { CourseFile, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CourseFileService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCourseDto: Prisma.CourseFileCreateInput): Promise<CourseFile> {
    return this.prisma.courseFile.create({
      data: createCourseDto,
    });
  }

  findAll(): Promise<CourseFile[] | []> {
    return this.prisma.courseFile.findMany();
  }

  findOne(id: string): Promise<CourseFile | null> {
    return this.prisma.courseFile.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateCourseDto: Prisma.CourseFileUpdateInput,
  ): Promise<CourseFile> {
    return this.prisma.courseFile.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
