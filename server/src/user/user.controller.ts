import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from 'src/decorator/user.decorator';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async getUser(@User() user) {
    return user;
  }

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

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const user = req.user;

    if (user) {
      return user;
    }

    return null;
  }
}
