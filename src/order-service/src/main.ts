import { NestFactory } from '@nestjs/core';
import { GrpcOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

import { appGrpMicroservice } from './app.grpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<GrpcOptions>(appGrpMicroservice);

  await app.startAllMicroservices();
  await app.listen(4002);
}
bootstrap();
