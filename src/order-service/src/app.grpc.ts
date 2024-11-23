import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const appGrpcOptions: GrpcOptions['options'] = {
  url: '0.0.0.0:5002',
  package: ['order'],
  protoPath: [join(__dirname, '../proto/order.proto')],
};

export const appGrpMicroservice: GrpcOptions = {
  transport: Transport.GRPC,
  options: appGrpcOptions,
};
