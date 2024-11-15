import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { logsEntity } from 'src/entity/system/logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([logsEntity])],
  controllers: [],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}
