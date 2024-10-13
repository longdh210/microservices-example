import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation('addPayment')
  async create(
    @Args('orderId') orderId: string,
    @Args('status') status: string,
    @Args('paymentMethod') paymentMethod: string,
  ) {
    return await this.paymentService.addPayment({
      orderId,
      status,
      paymentMethod,
    });
  }

  @Query('payments')
  async listPayment() {
    return await this.paymentService.listPayment();
  }

  @Query('payment')
  async findOne(@Args('id') id: string) {
    return await this.paymentService.getPayment({ id });
  }

  @Mutation('deletePayment')
  async remove(@Args('id') id: string) {
    return this.paymentService.deletePayment({ id });
  }
}
