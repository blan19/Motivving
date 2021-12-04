import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Motives } from './Motives';
import { Users } from './Users';

@Entity()
export class UserMotives {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { name: 'OwnerId' })
  OwnerId: number;

  @Column('int', { name: 'MotiveId' })
  MotiveId: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleleAt: Date;

  @ManyToOne(() => Users, (users) => users.UserMotives)
  @JoinColumn({ name: 'OwnerId', referencedColumnName: 'id' })
  User: Users;

  @ManyToOne(() => Motives, (motives) => motives)
  @JoinColumn({ name: 'MotiveId', referencedColumnName: 'id' })
  Motive: Motives;
}
