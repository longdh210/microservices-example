import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const appGrpcOptions: GrpcOptions['options'] = {
  url: '0.0.0.0:5001',
  package: ['productcatalog'],
  protoPath: [join(__dirname, '../proto/product-catalog.proto')],
};

export const appGrpMicroservice: GrpcOptions = {
  transport: Transport.GRPC,
  options: appGrpcOptions,
};
