import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
   const path='/home/benjeddou/Desktop/nest-grpc/src/proto/service.proto'
   /* ll */
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'randomPackage',
        protoPath: path
      },
    },
  );
  
  app.listen();
}
bootstrap();
