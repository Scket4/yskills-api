import { Injectable } from '@nestjs/common';
import { Prisma, Technology } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TechnologyService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createTechnologyDto: Prisma.TechnologyCreateInput,
  ): Promise<Technology> {
    return this.prisma.technology.create({
      data: createTechnologyDto,
    });
  }

  findAll(): Promise<Technology[] | []> {
    return this.prisma.technology.findMany();
  }

  findOne(id: string): Promise<Technology | null> {
    return this.prisma.technology.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateTechnologyDto: Prisma.TechnologyUpdateInput,
  ): Promise<Technology> {
    return this.prisma.technology.update({
      where: { id },
      data: updateTechnologyDto,
    });
  }

  remove(id: string) {
    return this.prisma.technology.delete({
      where: { id },
    });
  }
}
