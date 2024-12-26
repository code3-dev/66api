import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import moment from 'moment';
import momentJalaali from 'moment-jalaali';

@Controller('age')
export class AgeController {

  @Post('gregorian')
  calculateAgeFromGregorian(@Body() { birthdate }: { birthdate: string }) {
    const birthMoment = moment(birthdate, 'YYYY-MM-DD');
    const today = moment();
    const years = today.diff(birthMoment, 'years');
    birthMoment.add(years, 'years');
    const months = today.diff(birthMoment, 'months');
    birthMoment.add(months, 'months');
    const days = today.diff(birthMoment, 'days');
    
    return {
      birthdate,
      age: {
        years,
        months,
        days,
      },
    };
  }

  @Post('shamsi')
  calculateAgeFromShamsi(@Body() { birthdate }: { birthdate: string }) {
    const birthMoment = momentJalaali(birthdate, 'jYYYY/jMM/jDD');
    const today = momentJalaali();
    const years = today.diff(birthMoment, 'years');
    birthMoment.add(years, 'years');
    const months = today.diff(birthMoment, 'months');
    birthMoment.add(months, 'months');
    const days = today.diff(birthMoment, 'days');
    
    return {
      birthdate,
      age: {
        years,
        months,
        days,
      },
    };
  }

  @Get('gregorian')
  calculateAgeFromGregorianGet(@Query('birthdate') birthdate: string) {
    const birthMoment = moment(birthdate, 'YYYY-MM-DD');
    const today = moment();
    const years = today.diff(birthMoment, 'years');
    birthMoment.add(years, 'years');
    const months = today.diff(birthMoment, 'months');
    birthMoment.add(months, 'months');
    const days = today.diff(birthMoment, 'days');
    
    return {
      birthdate,
      age: {
        years,
        months,
        days,
      },
    };
  }
  
  @Get('shamsi')
  calculateAgeFromShamsiGet(@Query('birthdate') birthdate: string) {
    const birthMoment = momentJalaali(birthdate, 'jYYYY/jMM/jDD');
    const today = momentJalaali();
    const years = today.diff(birthMoment, 'years');
    birthMoment.add(years, 'years');
    const months = today.diff(birthMoment, 'months');
    birthMoment.add(months, 'months');
    const days = today.diff(birthMoment, 'days');
    
    return {
      birthdate,
      age: {
        years,
        months,
        days,
      },
    };
  }
}
