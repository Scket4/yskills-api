import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCourseDto: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({
      data: {
        ...createCourseDto,
        duration: Number(createCourseDto.duration) || 90,
      },
    });
  }

  findAll(): Promise<Course[] | []> {
    return this.prisma.course.findMany({
      include: {
        technologies: {
          include: {
            technology: true,
          },
        },
        level: true,
        chapters: {
          orderBy: {
            order: 'asc',
          },
          include: {
            lessons: {
              orderBy: {
                order: 'asc',
              },
              include: {
                LessonFile: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: string): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateCourseDto: Prisma.CourseUpdateInput,
  ): Promise<Course> {
    return this.prisma.course.update({
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
