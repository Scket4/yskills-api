import { Module } from '@nestjs/common';
import { TechnologyCourseService } from './technology-course.service';
import { TechnologyCourseController } from './technology-course.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [TechnologyCourseController],
  providers: [TechnologyCourseService],
  imports: [PrismaModule],
})
export class TechnologyCourseModule {}
