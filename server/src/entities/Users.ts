import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Likes } from './Likes';
import { UserMotives } from './UserMotives';
import { Wishes } from './Wishes';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'email', nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'nickname' })
  nickname: string;

  @Column({ type: 'varchar', name: 'password', nullable: true })
  password: string;

  @Column({ type: 'varchar', name: 'provider', default: 'local' })
  provider: string;

  @Column({ type: 'int', name: 'snsId', nullable: true })
  snsId: number;

  @Column({ type: 'varchar', name: 'profileImg', nullable: true })
  profileImg: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;

  @OneToMany(() => UserMotives, (userMotives) => userMotives.User)
  UserMotives: UserMotives[];

  @OneToMany(() => Wishes, (wishes) => wishes.User)
  Wishes: Wishes[];

  @OneToMany(() => Likes, (likes) => likes.User)
  Likes: Likes[];
}
