import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductCatalogEntity } from './entities/product-catalog.entity';
import { HealthController } from './health/health.controller';

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
        host: configService.get('PRODUCT_CATALOG_HOST'),
        port: configService.get('PRODUCT_CATALOG_PORT'),
        username: configService.get('PRODUCT_CATALOG_USER'),
        password: configService.get('PRODUCT_CATALOG_PASSWORD'),
        database: configService.get('PRODUCT_CATALOG_DB'),
        entities: [ProductCatalogEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([ProductCatalogEntity]),
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
