import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [UserCourseController],
  providers: [UserCourseService],
  imports: [PrismaModule],
})
export class UserCourseModule {}
