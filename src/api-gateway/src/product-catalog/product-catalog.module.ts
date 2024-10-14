import { Module } from '@nestjs/common';
import { ProductCatalogService } from './product-catalog.service';
import { ProductCatalogResolver } from './product-catalog.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_CATALOG_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3001',
          package: 'productcatalog',
          protoPath: join(__dirname, '../../proto/product-catalog.proto'),
        },
      },
    ]),
  ],
  providers: [ProductCatalogResolver, ProductCatalogService],
  exports: [ProductCatalogService],
})
export class ProductCatalogModule {}
