import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class NaverGuard extends AuthGuard('naver') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const can = await super.canActivate(context);
    if (can) {
      const req = context.switchToHttp().getRequest();
      console.log('login for cookie');
      await super.logIn(req);
    }

    return true;
  }
}
