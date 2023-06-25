import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnologyCourseService } from './technology-course.service';
import { Prisma } from '@prisma/client';

@Controller('technology-course')
export class TechnologyCourseController {
  constructor(
    private readonly technologyCourseService: TechnologyCourseService,
  ) {}

  @Post()
  create(
    @Body() createTechnologyCourseDto: Prisma.TechnologyCourseCreateInput,
  ) {
    return this.technologyCourseService.create(createTechnologyCourseDto);
  }

  @Get()
  findAll() {
    return this.technologyCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technologyCourseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnologyCourseDto: Prisma.TechnologyCourseUpdateInput,
  ) {
    return this.technologyCourseService.update(id, updateTechnologyCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technologyCourseService.remove(id);
  }
}
