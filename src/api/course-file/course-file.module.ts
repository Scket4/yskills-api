import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [CourseFileController],
  providers: [CourseFileService],
  imports: [PrismaModule],
})
export class CourseFileModule {}
