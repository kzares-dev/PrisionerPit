import { Module } from '@nestjs/common';
import { Contest } from './contest';
import { ContestController } from './contest.controller';

@Module({
  providers: [Contest],
  controllers: [ContestController],
})
export class ContestModule {}
