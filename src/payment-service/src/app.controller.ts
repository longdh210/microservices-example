import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AddPaymentDto } from './dto/add-payment.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('PaymentService', 'AddPayment')
  async addPayment(addPaymentDto: AddPaymentDto) {
    return await this.appService.addPayment(addPaymentDto);
  }

  @GrpcMethod('PaymentService', 'ListPayments')
  async listPayments() {
    return await this.appService.listPayments();
  }

  @GrpcMethod('PaymentService', 'GetPayment')
  async getPaymentById({ id }) {
    return await this.appService.getPaymentById(id);
  }

  @GrpcMethod('PaymentService', 'DeletePayment')
  async deletePayment({ id }) {
    return await this.appService.deletePayment(id);
  }
}
