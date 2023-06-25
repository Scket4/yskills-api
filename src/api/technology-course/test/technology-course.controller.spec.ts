import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyCourseController } from '../technology-course.controller';
import { TechnologyCourseService } from '../technology-course.service';

describe('TechnologyCourseController', () => {
  let controller: TechnologyCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologyCourseController],
      providers: [TechnologyCourseService],
    }).compile();

    controller = module.get<TechnologyCourseController>(
      TechnologyCourseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
