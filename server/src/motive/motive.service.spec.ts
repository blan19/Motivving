import { Test, TestingModule } from '@nestjs/testing';
import { MotiveService } from './motive.service';

describe('MotiveService', () => {
  let service: MotiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotiveService],
    }).compile();

    service = module.get<MotiveService>(MotiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
