import { Injectable } from '@nestjs/common';
import { GameEntity } from 'src/entity/station/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameListDto, CreateGameDto, UpdateGameDto } from './dto/index';
import { ResultData } from 'src/utils/result';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly GameEntityRep: Repository<GameEntity>,
  ) {}
  async getGameList(query: GameListDto) {
    const { pageCurrent, pageSize, type, name } = query;
    const entity = this.GameEntityRep.createQueryBuilder('entity');
    entity.where('entity.delFlag = :delFlag', { delFlag: '0' });
    if (type) {
      entity.andWhere('entity.game_type = :type', { game_type: type });
    }
    if (name) {
      entity.andWhere('entity.game_name LIKE :name', {
        game_name: `%${name}%`,
      });
    }
    if (pageSize && pageCurrent) {
      // skip跳过指定数量的记录
      // take返回指定数量的记录
      entity.skip(pageSize * (pageCurrent - 1)).take(pageSize);
    }
    const [list, total] = await entity.getManyAndCount();
    return ResultData.ok({ list, total });
  }

  async getGameDetail(query: { id: string }) {
    const data = await this.GameEntityRep.findOne({
      where: {
        gameId: query.id,
        delFlag: '0',
      },
    });
    console.log(data);
    return ResultData.ok(data);
  }

  async createGameData(body: CreateGameDto) {
    const res = await this.GameEntityRep.save(body);
    console.log(res, body);
    return ResultData.ok(res);
  }

  async updateGameData(body: UpdateGameDto) {
    const res = await this.GameEntityRep.update({ gameId: body.id }, body);
    console.log(res);
    return ResultData.ok(res);
  }
}
