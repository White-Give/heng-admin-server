import { Global, Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsController } from './logs.controller';

import { logsEntity } from 'src/entity/system/logs.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([logsEntity])],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}
