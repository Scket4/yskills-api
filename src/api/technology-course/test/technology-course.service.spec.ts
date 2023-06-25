import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyCourseService } from '../technology-course.service';

describe('TechnologyCourseService', () => {
  let service: TechnologyCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyCourseService],
    }).compile();

    service = module.get<TechnologyCourseService>(TechnologyCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
