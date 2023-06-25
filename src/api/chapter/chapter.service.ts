import { Injectable } from '@nestjs/common';
import { Chapter, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ChapterService {
  constructor(private readonly prisma: PrismaService) {}
  create(createChapterDto: Prisma.ChapterCreateInput): Promise<Chapter> {
    return this.prisma.chapter.create({
      data: createChapterDto,
    });
  }

  findAll(): Promise<Chapter[] | []> {
    return this.prisma.chapter.findMany();
  }

  findOne(id: string): Promise<Chapter | null> {
    return this.prisma.chapter.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateChapterDto: Prisma.ChapterUpdateInput,
  ): Promise<Chapter> {
    return this.prisma.chapter.update({
      where: { id },
      data: updateChapterDto,
    });
  }

  remove(id: string) {
    return this.prisma.chapter.delete({
      where: { id },
    });
  }
}
