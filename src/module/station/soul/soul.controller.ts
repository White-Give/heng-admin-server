import { Controller, Get } from '@nestjs/common';
import { SoulService } from './soul.service';

@Controller('soul')
export class SoulController {
  constructor(private readonly soulService: SoulService) {}

  @Get('list')
  getHello(): string {
    return this.soulService.getHello();
  }
}
