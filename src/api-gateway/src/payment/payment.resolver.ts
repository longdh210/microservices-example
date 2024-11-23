import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { AddPaymentDto } from './dto/create-payment.input';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation('addPayment')
  async create(@Args('createPaymentInput') createPaymentInput: AddPaymentDto) {
    return await this.paymentService.addPayment({ ...createPaymentInput });
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
