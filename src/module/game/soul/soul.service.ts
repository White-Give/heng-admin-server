import { Injectable } from '@nestjs/common';

@Injectable()
export class SoulService {
  getHello(): string {
    return 'Hello World!';
  }
}
