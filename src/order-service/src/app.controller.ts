import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AddOrderDto } from './dto/add-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('OrderService', 'AddOrder')
  async addOrder(addOrder: AddOrderDto) {
    return await this.appService.addOrder(addOrder);
  }

  @GrpcMethod('OrderService', 'ListOrders')
  async listOrders() {
    return await this.appService.listOrders();
  }

  @GrpcMethod('OrderService', 'GetOrder')
  async getOrderById({ id }) {
    return await this.appService.getOrderById(id);
  }

  @GrpcMethod('OrderService', 'DeleteOrder')
  async deleteOrder({ id }) {
    return await this.appService.deleteOrderById(id);
  }
}
