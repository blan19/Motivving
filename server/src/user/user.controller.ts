import { Controller, Get, Request } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Get('/')
  async getUser(@Request() req) {
    return req.user;
  }
}
