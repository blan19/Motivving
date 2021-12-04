import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserMotives } from './UserMotives';
import { Videos } from './Videos';

@Entity()
export class Motives {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name' })
  name: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => UserMotives, (userMotives) => userMotives.Motive)
  userMotives: UserMotives[];

  @OneToMany(() => Videos, (videos) => videos.Motive)
  Videos: Videos[];
}
