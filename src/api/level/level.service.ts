import { Injectable } from '@nestjs/common';
import { Level, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LevelService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLevelDto: Prisma.LevelCreateInput): Promise<Level> {
    return this.prisma.level.create({
      data: createLevelDto,
    });
  }

  findAll(): Promise<Level[] | []> {
    return this.prisma.level.findMany();
  }

  findOne(id: string): Promise<Level | null> {
    return this.prisma.level.findUnique({
      where: { id },
    });
  }

  update(id: string, updateLevelDto: Prisma.LevelUpdateInput): Promise<Level> {
    return this.prisma.level.update({
      where: { id },
      data: updateLevelDto,
    });
  }

  remove(id: string) {
    return this.prisma.level.delete({
      where: { id },
    });
  }
}
