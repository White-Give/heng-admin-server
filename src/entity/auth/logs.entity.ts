import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('sys_infor', {
  comment: '记录日志',
})
export class logsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'info_id', comment: '访问ID' })
  public infoId: number;

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
    name: 'login_time',
    comment: '访问时间',
  })
  public loginTime: Date;

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
