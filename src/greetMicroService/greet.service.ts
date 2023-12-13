import { Injectable } from '@nestjs/common';
import { GreetServiceClient } from 'src/proto/randomPackage/GreetService'; 
import { GreetRequest } from 'src/proto/randomPackage/GreetRequest';
import { GreetResponse } from 'src/proto/randomPackage/GreetResponse';
import { Client, ClientGrpc,Transport } from '@nestjs/microservices';


Injectable()
export class GreetService {
  private readonly grpcService: GreetServiceClient;

  constructor() {
    this.grpcService = Client({
        transport: Transport.GRPC,
        options: {
            package: 'randomPackage',
            protoPath: '/home/benjeddou/Desktop/nest-grpc/src/proto/service.proto',
        },
    }) as unknown as GreetServiceClient;
  }

  async sendGreeting(request: GreetRequest): Promise<GreetResponse> {
    return new Promise((resolve, reject) => {
      this.grpcService.Greet(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
}