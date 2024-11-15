import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('games', {
  comment: 'game表',
})
export class GameEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public gameId: string;

  @Column({
    type: 'varchar',
    name: 'game_name',
    default: '',
    comment: '游戏名称',
  })
  public gameName: string;

  // 1 魂 2 rpg 3 即时arpg 4 回合制 5 地牢drpg 6 动作act 7 策略 8 模拟 9 fps 10 即时对战 11 休闲 12 网游
  @Column({
    type: 'varchar',
    name: 'game_type',
    default: '',
    comment: '游戏类型',
  })
  public gameType: string;

  @Column({
    type: 'varchar',
    name: 'game_desc',
    default: '',
    comment: '游戏描述',
  })
  public gameDesc: string;

  @Column({
    type: 'varchar',
    name: 'game_icon',
    default: '',
    comment: '游戏图标',
  })
  public gameIcon: string;

  @Column({
    type: 'varchar',
    name: 'game_time',
    default: '',
    comment: '游戏时间',
  })
  public gameTime: string;

  @Column({
    type: 'varchar',
    name: 'game_status',
    default: '',
    comment: '游戏状态',
  })
  public gameStatus: string;

  @Column({
    type: 'varchar',
    name: 'game_url',
    default: '',
    comment: '游戏地址',
  })
  public gameUrl: string;

  @Column({ type: 'int', name: 'game_price', default: 0, comment: '游戏价格' })
  public gamePrice: number;

  @Column({ type: 'int', name: 'game_sales', default: 0, comment: '游戏销量' })
  public gameSales: number;

  @Column({ type: 'int', name: 'game_score', default: 0, comment: '游戏评分' })
  public gameScore: number;

  @Column({
    type: 'int',
    name: 'game_download',
    default: 0,
    comment: '游戏下载量',
  })
  public gameDownload: number;

  @Column({
    type: 'int',
    name: 'game_comment',
    default: 0,
    comment: '游戏评论数',
  })
  public gameComment: number;

  @Column({ type: 'int', name: 'game_like', default: 0, comment: '游戏点赞数' })
  public gameLike: number;

  @Column({
    type: 'int',
    name: 'game_share',
    default: 0,
    comment: '游戏分享数',
  })
  public gameShare: number;

  @Column({
    type: 'int',
    name: 'game_collect',
    default: 0,
    comment: '游戏收藏数',
  })
  public gameCollect: number;

  @Column({ type: 'int', name: 'game_view', default: 0, comment: '游戏浏览数' })
  public gameView: number;
}
