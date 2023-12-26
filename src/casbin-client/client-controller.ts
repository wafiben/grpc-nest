import { Controller, Get } from '@nestjs/common';
import { CasbinServiceClient } from './casbin-client.service';

@Controller('casbin')
export class CasbinController {
  constructor(private readonly casbinServiceClient: CasbinServiceClient) {}

  @Get('subjects')
  getAllSubjects(): any {
    return this.casbinServiceClient.getAllSubjects();
  }
}
