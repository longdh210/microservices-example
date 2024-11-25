import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { AddOrderDto } from 'src/dto/add-order.dto';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation('addOrder')
  async addOrder(@Args('createOrderInput') createOrderInput: AddOrderDto) {
    return await this.orderService.addOrder({ ...createOrderInput });
  }

  @Query('orders')
  async listOrder() {
    return await this.orderService.listOrder();
  }

  @Query('order')
  async getOrder(@Args('id') id: string) {
    return await this.orderService.getOrder({ id });
  }

  @Mutation('deleteOrder')
  async deleteOrder(@Args('id') id: string) {
    return await this.orderService.deleteOrder({ id });
  }
}
