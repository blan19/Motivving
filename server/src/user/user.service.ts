import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(email, nickname, password) {
    const exist = await this.userRepository.findOne({ where: { email } });

    if (exist) {
      throw new HttpException('이미 존재하는 이메일입니다', 401);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });

    if (user) {
      return true;
    }

    return null;
  }
}
