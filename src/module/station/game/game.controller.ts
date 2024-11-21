import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { GameListDto, CreateGameDto, UpdateGameDto } from './dto/index';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('list')
  getGameList(@Query() query: GameListDto) {
    return this.gameService.getGameList(query);
  }

  @Get('detail')
  getGameDetail(@Query() query: { id: string }) {
    return this.gameService.getGameDetail(query);
  }

  @Post('create')
  createGameData(@Body() body: CreateGameDto) {
    return this.gameService.createGameData(body);
  }

  @Post('update')
  updateGameData(@Body() body: UpdateGameDto) {
    return this.gameService.updateGameData(body);
  }
}
