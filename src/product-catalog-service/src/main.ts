import { NestFactory } from '@nestjs/core';
import { appGrpMicroservice } from './app.grpc';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(appGrpMicroservice);

  await app.startAllMicroservices();
  await app.listen(4001);
}
bootstrap();
