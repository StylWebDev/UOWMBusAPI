import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as tei from '../../schedules/tei.json';
import * as mesopotamia from '../../schedules/mesopotamia.json';
import * as maniakoi from '../../schedules/maniakoi.json';

@Injectable()
export class BusService {
  getSchedule(id: number): any {
    switch (id.toString()) {
      case '1':
        return tei;
      case '2':
        return maniakoi;
      case '3':
        return mesopotamia;
      default:
        throw new HttpException('Invalid schedule', HttpStatus.BAD_REQUEST);
    }
  }
}
