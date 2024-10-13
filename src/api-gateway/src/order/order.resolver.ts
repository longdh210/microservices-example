import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './order.service';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation('addOrder')
  async addOrder(
    @Args('customerId') customerId: string,
    @Args('productIds') productIds: string[],
    @Args('prices') prices: number[],
  ) {
    return await this.orderService.addOrder({ customerId, productIds, prices });
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
