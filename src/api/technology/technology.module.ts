import { Module } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyController } from './technology.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyService],
  imports: [PrismaModule],
})
export class TechnologyModule {}
