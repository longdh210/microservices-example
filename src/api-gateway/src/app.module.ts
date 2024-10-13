import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OrderModule } from './order/order.module';
import { PaymentResolver } from './payment/payment.resolver';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    OrderModule,
    ProductCatalogModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, PaymentResolver],
})
export class AppModule {}
