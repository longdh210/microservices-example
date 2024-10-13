import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order-service.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('ORDER_HOST'),
        port: configService.get('ORDER_PORT'),
        username: configService.get('ORDER_USER'),
        password: configService.get('ORDER_PASSWORD'),
        database: configService.get('ORDER_DB'),
        entities: [OrderEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([OrderEntity]),
    ClientsModule.register([
      {
        name: 'PRODUCT_CATALOG_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3001',
          package: 'productcatalog',
          protoPath: join(__dirname, '../proto/product-catalog.proto'),
        },
      },
      {
        name: 'PAYMENT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3003',
          package: 'payment',
          protoPath: join(__dirname, '../proto/payment.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
