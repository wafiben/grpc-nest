import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
 import { CasbinController } from './client-controller';
 import { CasbinServiceClient } from './casbin-client.service';


@Module({
  controllers: [CasbinController],
  providers: [CasbinServiceClient], 
})
export class CasbinModule {} 


