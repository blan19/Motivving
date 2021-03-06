import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Likes } from 'src/entities/Likes';
import { Motives } from 'src/entities/Motives';
import { UserMotives } from 'src/entities/UserMotives';
import { Users } from 'src/entities/Users';
import { Videos } from 'src/entities/Videos';
import { Wishes } from 'src/entities/Wishes';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Likes, Motives, UserMotives, Videos, Wishes],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
