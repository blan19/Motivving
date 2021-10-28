import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { KakaoGuard } from 'src/auth/kaka-auth.guard';
import { NaverGuard } from 'src/auth/naver-auth.guard';

@Controller('oauth')
export class OauthController {
  @UseGuards(KakaoGuard)
  @Get('/kakao')
  async kakaoLogin(@Request() req, @Response({ passthrough: true }) res) {
    const user = req.user;
    if (!user) {
      return null;
    }

    return res.redirect('http://localhost:3000/main');
  }

  @UseGuards(NaverGuard)
  @Get('/naver')
  async naverLogin(@Request() req, @Response({ passthrough: true }) res) {
    const user = req.user;

    if (!user) {
      return null;
    }

    return res.redirect('http://localhost:3000/main');
  }
}
