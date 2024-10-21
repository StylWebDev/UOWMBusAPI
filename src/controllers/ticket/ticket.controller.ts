import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import {TicketService} from '../../providers/ticket/ticket.service';

@Controller()
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @Get('tickets/:zone')
  getTicketByID(@Param('zone') zone: "zoneA" | "zoneB"): any {
    return this.ticketService.getZone(zone);
  }
}
