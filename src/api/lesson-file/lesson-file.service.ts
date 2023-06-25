import { Injectable } from '@nestjs/common';
import { LessonFile, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LessonFileService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createLessonFileDto: Prisma.LessonFileCreateInput,
  ): Promise<LessonFile> {
    return this.prisma.lessonFile.create({
      data: createLessonFileDto,
    });
  }

  findAll(): Promise<LessonFile[] | []> {
    return this.prisma.lessonFile.findMany();
  }

  findOne(id: string): Promise<LessonFile | null> {
    return this.prisma.lessonFile.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateLessonFileDto: Prisma.LessonFileUpdateInput,
  ): Promise<LessonFile> {
    return this.prisma.lessonFile.update({
      where: { id },
      data: updateLessonFileDto,
    });
  }

  remove(id: string) {
    return this.prisma.lessonFile.delete({
      where: { id },
    });
  }
}
