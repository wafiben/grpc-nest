import { Controller, Get, Param } from '@nestjs/common';
import { GreetRequest } from 'src/proto/randomPackage/GreetRequest';
import { GreetService } from './greet.service';
import { GreetResponse } from 'src/proto/randomPackage/GreetResponse';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get(':name')
  async getGreeting(@Param('name') name: string): Promise<GreetResponse> {
    const request: GreetRequest = { name };
    return this.greetService.sendGreeting(request);
  }
}