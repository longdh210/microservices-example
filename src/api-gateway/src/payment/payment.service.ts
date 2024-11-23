import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AddPaymentDto } from './dto/create-payment.input';
import { lastValueFrom, Observable } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';

interface IPaymentService {
  addPayment({ orderId, status, paymentMethod }): Observable<any>;
  listPayment({}): Observable<any>;
  getPayment({ id }): Observable<any>;
  deletePayment({ id }): Observable<any>;
}

@Injectable()
export class PaymentService implements OnModuleInit {
  private paymentService: IPaymentService;

  constructor(
    @Inject('PAYMENT_PACKAGE') private readonly paymentClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.paymentService =
      this.paymentClient.getService<IPaymentService>('PaymentService');
  }

  async addPayment(addPaymentDto: AddPaymentDto) {
    return await lastValueFrom(this.paymentService.addPayment(addPaymentDto));
  }

  async listPayment() {
    console.log('list payment');
    const listPayment = await lastValueFrom(
      this.paymentService.listPayment(null),
    );
    console.log('listPayment:', listPayment);
    return listPayment.payments;
  }

  async getPayment({ id }) {
    const payment = await lastValueFrom(this.paymentService.getPayment(id));
    return payment;
  }

  async deletePayment({ id }) {
    return await lastValueFrom(this.paymentService.deletePayment({ id }));
  }
}
