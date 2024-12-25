import { Test, TestingModule } from '@nestjs/testing';
import { DiffController } from './diff.controller';

describe('DiffController', () => {
  let controller: DiffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiffController],
    }).compile();

    controller = module.get<DiffController>(DiffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
