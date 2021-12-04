import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';
import { Videos } from './Videos';

@Entity()
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { name: 'VideoId' })
  VideoId: number;

  @Column('int', { name: 'OwnerId' })
  OwnerId: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Videos, (videos) => videos.Likes)
  @JoinColumn({ name: 'VideoId', referencedColumnName: 'id' })
  Video: Videos;

  @ManyToOne(() => Users, (users) => users.Likes)
  @JoinColumn({ name: 'OwnerId', referencedColumnName: 'id' })
  User: Users;
}
