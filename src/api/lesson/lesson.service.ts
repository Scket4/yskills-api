import { Injectable } from '@nestjs/common';
import { Lesson, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LessonService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLessonDto: Prisma.LessonCreateInput): Promise<Lesson> {
    return this.prisma.lesson.create({
      data: createLessonDto,
    });
  }

  findAll(): Promise<Lesson[] | []> {
    return this.prisma.lesson.findMany();
  }

  findOne(id: string): Promise<Lesson | null> {
    return this.prisma.lesson.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateLessonDto: Prisma.LessonUpdateInput,
  ): Promise<Lesson> {
    return this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  remove(id: string) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
