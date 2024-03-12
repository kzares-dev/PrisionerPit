import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ContestModule } from './contest/contest.module';

@Module({
  imports: [AuthModule, ContestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
