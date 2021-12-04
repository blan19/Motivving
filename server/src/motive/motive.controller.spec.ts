import { Test, TestingModule } from '@nestjs/testing';
import { MotiveController } from './motive.controller';

describe('MotiveController', () => {
  let controller: MotiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotiveController],
    }).compile();

    controller = module.get<MotiveController>(MotiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
