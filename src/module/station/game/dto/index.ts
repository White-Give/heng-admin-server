import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dto/index';

export class GameListDto extends PaginationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  type: string;
}

export class CreateGameDto {
  @IsOptional()
  @IsString()
  gameName: string;

  @IsOptional()
  @IsString()
  gameType: string;

  @IsOptional()
  @IsString()
  gameDesc: string;

  @IsOptional()
  @IsString()
  gameData: string;

  @IsOptional()
  @IsString()
  gameCreateTime: string;

  @IsOptional()
  @IsNumber()
  gamePrice: number;
}

export class UpdateGameDto extends CreateGameDto {
  @IsString()
  id: string;
}
