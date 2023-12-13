import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetService } from './greetMicroService/greet.service';
import { GreetController } from './greetMicroService/greet.controller';

@Module({
  imports: [],
  controllers: [AppController,  GreetController],
  providers: [AppService, GreetService],
})
export class AppModule {}







