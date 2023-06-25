import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonFileService } from './lesson-file.service';
import { Prisma } from '@prisma/client';

@Controller('lesson-file')
export class LessonFileController {
  constructor(private readonly lessonFileService: LessonFileService) {}

  @Post()
  create(@Body() createLessonFileDto: Prisma.LessonFileCreateInput) {
    return this.lessonFileService.create(createLessonFileDto);
  }

  @Get()
  findAll() {
    return this.lessonFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonFileService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLessonFileDto: Prisma.LessonFileUpdateInput,
  ) {
    return this.lessonFileService.update(id, updateLessonFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonFileService.remove(id);
  }
}
