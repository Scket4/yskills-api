import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [PrismaModule],
})
export class LevelModule {}
