import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameEntity } from 'src/entity/game/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SoulService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly gameEntityRep: Repository<GameEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
