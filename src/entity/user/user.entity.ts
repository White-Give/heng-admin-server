import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../base.entity';
@Entity('user_system', {
  comment: '用户信息表',
})
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'user_id', comment: '用户ID' })
  public userId: string;

  @Column({
    type: 'varchar',
    name: 'user_name',
    length: 30,
    nullable: false,
    comment: '用户账号',
  })
  public userName: string;

  @Column({
    type: 'varchar',
    name: 'nick_name',
    length: 30,
    nullable: false,
    comment: '用户昵称',
  })
  public nickName: string;

  //00系统用户
  @Column({
    type: 'varchar',
    name: 'user_type',
    length: 2,
    default: '00',
    comment: '用户类型',
  })
  public userType: string;

  @Column({
    type: 'varchar',
    name: 'email',
    length: 50,
    default: '',
    comment: '邮箱',
  })
  public email: string;

  @Column({
    type: 'varchar',
    name: 'phonenumber',
    default: '',
    length: 11,
    comment: '手机号码',
  })
  public phonenumber: string;

  //0男 1女 2未知
  @Column({
    type: 'char',
    name: 'sex',
    default: '2',
    length: 1,
    comment: '性别',
  })
  public sex: string;

  @Exclude({ toPlainOnly: true }) // 输出屏蔽密码
  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
    default: '',
    comment: '用户登录密码',
  })
  public password: string;

  @Column({
    type: 'varchar',
    name: 'login_ip',
    length: 128,
    default: '',
    comment: '最后登录IP',
  })
  public loginIp: string;

  @Column({ type: 'timestamp', name: 'login_date', comment: '最后登录时间' })
  public loginDate: Date;
}
