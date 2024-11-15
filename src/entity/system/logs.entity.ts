import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('logs_system', {
  comment: '记录日志',
})
export class logsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'info_id', comment: '日志ID' })
  public infoId: number;

  //日志类型
  @Column({
    type: 'varchar',
    name: 'type',
    length: 20,
    default: '',
    comment: '日志类型',
  })
  public type: string;

  @Column({
    type: 'varchar',
    name: 'user_name',
    length: 50,
    default: '',
    comment: '用户账号',
  })
  public userName: string;

  @Column({
    type: 'varchar',
    name: 'ipaddr',
    length: 128,
    default: '',
    comment: '登录IP地址',
  })
  public ipaddr: string;

  @Column({
    type: 'varchar',
    name: 'login_location',
    length: 255,
    default: '',
    comment: '登录地点',
  })
  public loginLocation: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'logs_time',
    comment: '录入时间',
  })
  public logsTime: Date;

  //提示消息
  @Column({
    type: 'varchar',
    name: 'msg',
    length: 255,
    default: '',
    comment: '日志消息',
  })
  public msg: string;
}
