import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('moto', {
  comment: '摩托',
})
export class MotoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public motoId: string;

  @Column({
    type: 'varchar',
    name: 'moto_name',
    default: '',
    comment: '摩托名称',
  })
  public motoName: string;

  @Column({
    type: 'varchar',
    name: 'moto_brand',
    default: '',
    comment: '摩托品牌',
  })
  public motoBrand: string;

  @Column({
    type: 'varchar',
    name: 'moto_type',
    default: '',
    comment: '摩托类型',
  })
  public motoType: string;

  @Column({
    type: 'varchar',
    name: 'moto_address',
    default: '',
    comment: '摩托产地',
  })
  public motoAddress: string;

  @Column({
    type: 'varchar',
    name: 'moto_price',
    default: '',
    comment: '摩托价格',
  })
  public motoPrice: string;

  @Column({
    type: 'simple-array',
    name: 'moto_image',
    default: null,
    comment: '摩托图片',
  })
  public motoImage: string[];

  @Column({
    type: 'varchar',
    name: 'moto_desc',
    default: '',
    comment: '摩托描述',
  })
  public motoDesc: string;

  // 0在售 1下架 2概念
  @Column({
    type: 'varchar',
    name: 'moto_status',
    default: '0',
    comment: '摩托状态',
  })
  public motoStatus: string;
}
