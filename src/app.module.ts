import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversionController } from './api/time/conversion/conversion.controller';
import { GetController } from './api/time/get/get.controller';
import { DiffController } from './api/time/diff/diff.controller';
import { AgeController } from './api/age/age.controller';

@Module({
  imports: [],
  controllers: [AppController, ConversionController, GetController, DiffController, AgeController],
  providers: [AppService],
})
export class AppModule {}
