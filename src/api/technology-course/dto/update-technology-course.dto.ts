import { PartialType } from '@nestjs/swagger';
import { CreateTechnologyCourseDto } from './create-technology-course.dto';

export class UpdateTechnologyCourseDto extends PartialType(CreateTechnologyCourseDto) {}
