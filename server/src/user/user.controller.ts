import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/decorator/user.decorator';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: '유저 조회' })
  @Get('/')
  async getUser(@User() user) {
    return user;
  }

  @UseGuards(NotLoggedInGuard)
  @ApiOperation({ summary: '회원가입' })
  @Post('/register')
  async register(@Request() req, @Response({ passthrough: true }) res) {
    const { email, nickname, password } = req.body;
    const user = await this.userService.register(email, nickname, password);

    if (user) {
      return res.send({ success: true, message: 'register' });
    }

    return null;
  }

  @UseGuards(NotLoggedInGuard)
  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@User() user) {
    if (user) {
      return user;
    }
    return null;
  }

  @UseGuards(LoggedInGuard)
  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }
}
