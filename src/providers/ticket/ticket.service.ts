import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as ticket from '../../util/tickets/tickets.json'

@Injectable()
export class TicketService {
  getZone(zone: string) {
    switch(zone.toString()) {
      case "zoneA":
        return ticket.zoneA;
      case "zoneB":
        return ticket.zoneB;
        default:
          throw new HttpException("Ticket Not Found", HttpStatus.BAD_REQUEST);

    }
  }
}
