import { NestFactory } from '@nestjs/core';
import { GrpcOptions } from '@nestjs/microservices';
import { appGrpMicroservice } from './app.grpc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<GrpcOptions>(appGrpMicroservice);

  await app.startAllMicroservices();
  await app.listen(4003);
}
bootstrap();
