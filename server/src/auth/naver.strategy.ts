import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-naver';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { constants } from './constants';

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {
    super({
      clientID: constants.naverKey,
      clientSecret: constants.naverSecret,
      callbackURL: 'http://localhost:4000/oauth/naver',
    });
  }
  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const { id, provider, _json } = profile;
    let changedId = null;

    if (!profile) {
      return null;
    }

    if (typeof id !== 'string') {
      changedId = Number(id);
    } else changedId = id;

    const exist = await this.usersRepository.findOne({
      provider,
      snsId: changedId,
    });

    if (exist) {
      const { password, ...rest } = exist;
      return done(null, rest);
    }

    const user = await this.usersRepository.save({
      email: _json && _json.email,
      nickname: _json.nickname || _json.email,
      password: null,
      snsId: changedId,
      provider,
    });

    if (!user) {
      return null;
    }

    const { password, ...rest } = user;

    return done(null, rest);
  }
}
