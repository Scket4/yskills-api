import { Module } from '@nestjs/common';
import { LessonFileService } from './lesson-file.service';
import { LessonFileController } from './lesson-file.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [LessonFileController],
  providers: [LessonFileService],
  imports: [PrismaModule],
})
export class LessonFileModule {}
