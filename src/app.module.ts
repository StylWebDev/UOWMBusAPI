import { Module } from '@nestjs/common';
import { BusController } from './controllers/bus/bus.controller';
import { BusService } from './providers/bus/bus.service';
import { MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule } from 'nest-morgan';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [MorganModule, ServeStaticModule.forRoot({ rootPath: './client' })],
  controllers: [BusController],
  providers: [
    BusService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
