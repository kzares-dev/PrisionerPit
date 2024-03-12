import { Module } from '@nestjs/common';
import { AuthProvider } from './auth.provider';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthProvider],
  controllers: [AuthController],
})
export class AuthModule {}
