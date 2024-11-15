import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('practical_fact', {
  comment: '新闻实事',
})
export class FactEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public factId: string;

  // 1. 情感 2. 实时 3. 统计
  @Column({ type: 'varchar', name: 'fact_type', default: '', comment: '类型' })
  public factType: string;

  @Column({ type: 'varchar', name: 'fact_name', default: '', comment: '名称' })
  public factName: string;

  @Column({ type: 'varchar', name: 'fact_desc', default: '', comment: '描述' })
  public factDesc: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'fact_time',
    comment: '录入时间',
  })
  public factTime: Date;
}
