import { Module } from '@nestjs/common';
import { MotiveController } from './motive.controller';
import { MotiveService } from './motive.service';

@Module({
  controllers: [MotiveController],
  providers: [MotiveService]
})
export class MotiveModule {}
