import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { Prisma } from '@prisma/client';

@Controller('course-file')
export class CourseFileController {
  constructor(private readonly courseFileService: CourseFileService) {}

  @Post()
  create(@Body() createCourseFileDto: Prisma.CourseFileCreateInput) {
    return this.courseFileService.create(createCourseFileDto);
  }

  @Get()
  findAll() {
    return this.courseFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseFileService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseFileDto: Prisma.CourseFileUpdateInput,
  ) {
    return this.courseFileService.update(id, updateCourseFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseFileService.remove(id);
  }
}
