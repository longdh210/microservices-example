import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const appGrpcOptions: GrpcOptions['options'] = {
  url: '0.0.0.0:5003',
  package: ['payment'],
  protoPath: [join(__dirname, '../proto/payment.proto')],
};

export const appGrpMicroservice: GrpcOptions = {
  transport: Transport.GRPC,
  options: appGrpcOptions,
};
