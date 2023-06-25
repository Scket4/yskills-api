import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Prisma } from '@prisma/client';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  create(@Body() createChapterDto: Prisma.ChapterCreateInput) {
    return this.chapterService.create(createChapterDto);
  }

  @Get()
  findAll() {
    return this.chapterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChapterDto: Prisma.CourseUpdateInput,
  ) {
    return this.chapterService.update(id, updateChapterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chapterService.remove(id);
  }
}
