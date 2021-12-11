import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Motives } from 'src/entities/Motives';
import { UserMotives } from 'src/entities/UserMotives';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class MotiveService {
  constructor(
    @InjectRepository(Motives)
    private motivesRepository: Repository<Motives>,
    @InjectRepository(UserMotives)
    private userMotivesRepository: Repository<UserMotives>,
  ) {}

  async getUserMotive(id) {
    if (!id) {
      throw new HttpException('params가 존재하지 않습니다', 403);
    }
    try {
      const myMotive = await this.userMotivesRepository.find({
        where: { OwnerId: id },
      });

      if (!myMotive) {
        throw new HttpException('모티브가 존재하지 않습니다', 401);
      }

      return myMotive;
    } catch (e) {
      console.error(e);
    }
  }

  async registerMyMotive(userId: number, motives: string[]) {
    if (!userId && !motives) {
      throw new HttpException('리퀘스트 데이터가 존재하지 않습니다', 401);
    }
    try {
      motives.forEach(async (motive) => {
        try {
          const createdMotive = await getManager()
            .getRepository(Motives)
            .create({
              name: motive,
            });
          await getManager().getRepository(UserMotives).create({
            OwnerId: userId,
            MotiveId: createdMotive.id,
          });
        } catch (e) {
          console.error(e);
        }
      });

      const resultedMotive = this.getUserMotive(userId);
      return resultedMotive;
    } catch (e) {
      console.error(e);
    }
  }

  async updateMyMotive(userId: number) {}
}
