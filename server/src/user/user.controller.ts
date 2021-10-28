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
import { User } from 'src/decorator/user.decorator';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: '유저 조회' })
  @Get('/')
  async getUser(@User() user) {
    console.log(user);

    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('/register')
  async register(@Request() req, @Response({ passthrough: true }) res) {
    console.log(req.body);
    const { email, nickname, password } = req.body;
    const user = await this.userService.register(email, nickname, password);

    if (user) {
      return res.send({ success: true, message: 'register' });
    }

    return null;
  }

  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const user = req.user;

    if (user) {
      return user;
    }

    return null;
  }

  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }
}
