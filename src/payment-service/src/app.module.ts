import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entity';

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
        host: configService.get('PAYMENT_HOST'),
        port: configService.get('PAYMENT_PORT'),
        username: configService.get('PAYMENT_USER'),
        password: configService.get('PAYMENT_PASSWORD'),
        database: configService.get('PAYMENT_DB'),
        entities: [PaymentEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([PaymentEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
