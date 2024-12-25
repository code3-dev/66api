import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import * as moment from 'moment';
import * as momentJalaali from 'moment-jalaali';

@Controller('diff')
export class DiffController {

  @Post('gregorian')
  calculateGregorianDiff(@Body() { startDate, endDate }: { startDate: string, endDate: string }) {
    const startMoment = moment(startDate, 'YYYY-MM-DD');
    const endMoment = moment(endDate, 'YYYY-MM-DD');
    const diff = endMoment.diff(startMoment, 'days');
    return {
      startDate,
      endDate,
      difference: diff,
      unit: 'days',
    };
  }

  @Post('shamsi')
  calculateShamsiDiff(@Body() { startDate, endDate }: { startDate: string, endDate: string }) {
    const startMoment = momentJalaali(startDate, 'jYYYY/jMM/jDD');
    const endMoment = momentJalaali(endDate, 'jYYYY/jMM/jDD');
    const diff = endMoment.diff(startMoment, 'days');
    return {
      startDate,
      endDate,
      difference: diff,
      unit: 'days',
    };
  }

  @Get('gregorian')
  calculateGregorianDiffGet(@Query('startDate') startDate: string, @Query('endDate') endDate: string) {
    const startMoment = moment(startDate, 'YYYY-MM-DD');
    const endMoment = moment(endDate, 'YYYY-MM-DD');
    const diff = endMoment.diff(startMoment, 'days');
    return {
      startDate,
      endDate,
      difference: diff,
      unit: 'days',
    };
  }

  @Get('shamsi')
  calculateShamsiDiffGet(@Query('startDate') startDate: string, @Query('endDate') endDate: string) {
    const startMoment = momentJalaali(startDate, 'jYYYY/jMM/jDD');
    const endMoment = momentJalaali(endDate, 'jYYYY/jMM/jDD');
    const diff = endMoment.diff(startMoment, 'days');
    return {
      startDate,
      endDate,
      difference: diff,
      unit: 'days',
    };
  }
}
