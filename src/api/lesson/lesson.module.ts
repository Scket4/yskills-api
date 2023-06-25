import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [LessonController],
  providers: [LessonService],
  imports: [PrismaModule],
})
export class LessonModule {}
