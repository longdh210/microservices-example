import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order-service.entity';
import { Repository } from 'typeorm';
import { AddOrderDto } from './dto/add-order.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ProductCatalogService {
  addProduct({}): Observable<any>;
  updateProduct({}): Observable<any>;
  listProducts({}): Observable<any>;
  getProduct({ id }): Observable<any>;
}

interface PaymentService {
  addPayment({ orderId, status, paymentMethod }): Observable<any>;
  listPayments({}): Observable<any>;
  getPayment({ id }): Observable<any>;
  deletePayment({ id }): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private productCatalogService: ProductCatalogService;
  private paymentSerivce: PaymentService;

  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @Inject('PRODUCT_CATALOG_PACKAGE') private productCatalogClient: ClientGrpc,
    @Inject('PAYMENT_PACKAGE') private paymentClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.productCatalogService =
      this.productCatalogClient.getService<ProductCatalogService>(
        'ProductCatalogService',
      );
    this.paymentSerivce =
      this.paymentClient.getService<PaymentService>('PaymentService');
  }

  async addOrder(addOrder: AddOrderDto) {
    const newOrder = this.orderRepository.create(addOrder);
    return await this.orderRepository.save(newOrder);
  }

  async getOrderById(id: string) {
    return await this.orderRepository.findOne({
      where: { id, softDelete: false },
    });
  }

  async listOrders() {
    const listOrders = await this.orderRepository.find({
      where: { softDelete: false },
    });
    return { orders: listOrders };
  }

  async deleteOrderById(id: string) {
    const order = await this.orderRepository.findOne({ where: { id } });
    order.softDelete = true;
    return await this.orderRepository.save(order);
  }
}
