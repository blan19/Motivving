import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KakaoStrategy } from './kakao.strategy';
import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';
import { NaverStrategy } from './naver.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    KakaoStrategy,
    NaverStrategy,
    LocalSerializer,
  ],
})
export class AuthModule {}
