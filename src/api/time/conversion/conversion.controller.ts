import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import * as moment from 'moment';
import * as momentJalaali from 'moment-jalaali';

@Controller('conversion')
export class ConversionController {

  @Post('gregorian-to-shamsi')
  convertGregorianToShamsi(@Body() { gregorianDate }: { gregorianDate: string }) {
    const gregorianMoment = moment(gregorianDate, 'YYYY-MM-DD');
    const persianDate = momentJalaali(gregorianMoment).format('jYYYY/jMM/jDD');
    return {
      gregorianDate,
      persianDate,
    };
  }

  @Post('shamsi-to-gregorian')
  convertShamsiToGregorian(@Body() { shamsiDate }: { shamsiDate: string }) {
    const [year, month, day] = shamsiDate.split('/');
    const gregorianDate = momentJalaali(`${year}-${month}-${day}`, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
    return {
      shamsiDate,
      gregorianDate,
    };
  }

  @Get('gregorian-to-shamsi')
  convertGregorianToShamsiGet(@Query('gregorianDate') gregorianDate: string) {
    const gregorianMoment = moment(gregorianDate, 'YYYY-MM-DD');
    const persianDate = momentJalaali(gregorianMoment).format('jYYYY/jMM/jDD');
    return {
      gregorianDate,
      persianDate,
    };
  }

  @Get('shamsi-to-gregorian')
  convertShamsiToGregorianGet(@Query('shamsiDate') shamsiDate: string) {
    const [year, month, day] = shamsiDate.split('/');
    const gregorianDate = momentJalaali(`${year}-${month}-${day}`, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
    return {
      shamsiDate,
      gregorianDate,
    };
  }
}
