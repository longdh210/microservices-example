import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'order-service:5002',
          package: 'order',
          protoPath: join(__dirname, '../../proto/order.proto'),
        },
      },
    ]),
  ],
  providers: [OrderResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
