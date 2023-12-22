import { ClientOptions, Transport } from '@nestjs/microservices';
const path = require('path');

const filePath = '/home/benjeddou/Desktop/casbin-server/proto/casbin.proto';

export const casbinGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'proto',
    protoPath: filePath,
    url: 'localhost:50051',
  },
};
