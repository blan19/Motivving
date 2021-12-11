import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { User } from 'src/decorator/user.decorator';
import { MotiveService } from './motive.service';

@UseGuards(LoggedInGuard)
@Controller('api/motives')
export class MotiveController {
  constructor(private motivesService: MotiveService) {}

  @Get()
  async gerMyMotive(@User() user, @Response() res) {
    const result = await this.motivesService.getUserMotive(user.id);
    if (!result) {
      throw new HttpException('마이 모티브를 조회하지 못했습니다', 401);
    }
    return res.status(200).json(result);
  }

  @Post()
  async registerMyMotive(@User() user, @Body() body, @Response() res) {
    const { motives } = body;
    const result = await this.motivesService.registerMyMotive(user.id, motives);
    if (!result) {
      throw new HttpException('마이 모티브를 조회하지 못했습니다', 401);
    }
    return res.status(200).json(result);
  }

  @Post('/:userId')
  async updateMyMotive(@Param('userId') userId) {
    return null;
  }
}

/**
 *
 * 유저 아이디를 받고 -> 마이모티브 배열 수정
 */
