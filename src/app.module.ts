import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './api/user/user.module';
import { CourseModule } from './api/course/course.module';
import { ChapterModule } from './api/chapter/chapter.module';
import { LessonModule } from './api/lesson/lesson.module';
import { TechnologyModule } from './api/technology/technology.module';
import { LevelModule } from './api/level/level.module';
import { TechnologyCourseModule } from './api/technology-course/technology-course.module';
import { UserCourseModule } from './api/user-course/user-course.module';
import { CourseFileModule } from './api/course-file/course-file.module';
import { LessonFileModule } from './api/lesson-file/lesson-file.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    CourseModule,
    ChapterModule,
    LessonModule,
    TechnologyModule,
    LevelModule,
    TechnologyCourseModule,
    UserCourseModule,
    CourseFileModule,
    LessonFileModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
