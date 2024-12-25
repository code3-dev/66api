import { Test, TestingModule } from '@nestjs/testing';
import { GetController } from './get.controller';

describe('GetController', () => {
  let controller: GetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetController],
    }).compile();

    controller = module.get<GetController>(GetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
