import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class LocalSerialize extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: any, done: CallableFunction) {
    return done(null, user);
  }

  deserializeUser(user: any, done: CallableFunction) {
    return done(null, user);
  }
}
