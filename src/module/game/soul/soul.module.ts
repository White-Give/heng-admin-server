import { Module } from '@nestjs/common';
import { SoulController } from './soul.controller';
import { SoulService } from './soul.service';

@Module({
  imports: [],
  controllers: [SoulController],
  providers: [SoulService],
})
export class SysSoulModule {}
