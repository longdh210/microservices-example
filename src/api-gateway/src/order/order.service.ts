import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { AddOrderDto } from 'src/dto/add-order.dto';

interface IOrderService {
  addOrder({ customerId, productIds, prices }): Observable<any>;
  listOrders({}): Observable<any>;
  getOrder({ id }): Observable<any>;
  deleteOrder({ id }): Observable<any>;
}

@Injectable()
export class OrderService implements OnModuleInit {
  private orderService: IOrderService;

  constructor(
    @Inject('ORDER_PACKAGE') private readonly orderClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.orderService =
      this.orderClient.getService<IOrderService>('OrderService');
  }

  async addOrder(addOrderDto: AddOrderDto) {
    return await lastValueFrom(this.orderService.addOrder(addOrderDto));
  }

  async listOrder() {
    const listOrder = await lastValueFrom(this.orderService.listOrders(null));
    return listOrder.orders;
  }

  async getOrder({ id }) {
    const order = await lastValueFrom(this.orderService.getOrder(id));
    return order;
  }

  async deleteOrder({ id }) {
    return await lastValueFrom(this.orderService.deleteOrder({ id }));
  }
}
