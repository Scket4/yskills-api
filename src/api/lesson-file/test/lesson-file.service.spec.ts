import { Test, TestingModule } from '@nestjs/testing';
import { LessonFileService } from '../lesson-file.service';

describe('LessonFileService', () => {
  let service: LessonFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonFileService],
    }).compile();

    service = module.get<LessonFileService>(LessonFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
