import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-naver';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {
    super({
      clientID: process.env.NAVER_KEY,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: process.env.NAVER_URL,
    });
  }
  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const { id, provider, username } = profile;
    let changedId = null;

    if (!profile) {
      return null;
    }

    if (typeof id !== 'string') {
      changedId = String(id);
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
      email:
        profile._json &&
        profile._json.kakao_account.has_email &&
        profile._json.kakao_account.email,
      nickname: username,
      password: null,
      snsId: changedId,
      provider,
    });

    const { password, ...rest } = user;

    return done(null, rest);
  }
}
