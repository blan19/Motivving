import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Likes } from './Likes';
import { Motives } from './Motives';
import { Wishes } from './Wishes';

@Entity()
export class Videos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'desc' })
  desc: string;

  @Column('varchar', { name: 'videoUrl' })
  videoUrl: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Likes, (likes) => likes.Video)
  Likes: Likes[];

  @OneToMany(() => Motives, (motives) => motives.Videos)
  Motive: Motives;

  @OneToMany(() => Wishes, (wishes) => wishes.Video)
  Wishes: Wishes[];
}
