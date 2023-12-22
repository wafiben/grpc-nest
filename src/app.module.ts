import { Module } from '@nestjs/common';
import { CasbinModule } from './casbin-client/casbin-client.module';

@Module({
  imports: [CasbinModule],
})
export class AppModule {}
