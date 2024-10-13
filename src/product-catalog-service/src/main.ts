import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { INestMicroservice } from '@nestjs/common';

async function bootstrap() {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3001',
        package: 'productcatalog',
        protoPath: join(__dirname, '../proto/product-catalog.proto'),
      },
    });

  await app.listen();
}
bootstrap();
