import { Test, TestingModule } from '@nestjs/testing';
import { LessonFileController } from '../lesson-file.controller';
import { LessonFileService } from '../lesson-file.service';

describe('LessonFileController', () => {
  let controller: LessonFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonFileController],
      providers: [LessonFileService],
    }).compile();

    controller = module.get<LessonFileController>(LessonFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
