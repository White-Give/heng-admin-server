import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { logsEntity } from 'src/entity/system/logs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(logsEntity)
    private readonly logsEntityRep: Repository<logsEntity>,
  ) {}
  async create(createLogs: any) {
    return await this.logsEntityRep.save(createLogs);
  }
}
