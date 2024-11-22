import { Module } from '@nestjs/common';
import { SoulController } from './soul.controller';
import { SoulService } from './soul.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from 'src/entity/station/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  controllers: [SoulController],
  providers: [SoulService],
})
export class StationSoulModule {}
