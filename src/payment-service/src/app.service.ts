import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { AddPaymentDto } from './dto/add-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
  ) {}

  async addPayment(addPaymentDto: AddPaymentDto) {
    const newPayment = this.paymentRepository.create(addPaymentDto);
    return await this.paymentRepository.save(newPayment);
  }

  async updatePayment(updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepository.findOne({
      where: { id: updatePaymentDto.id },
    });
    payment.status = updatePaymentDto.status;
    await this.paymentRepository.save(payment);
  }

  async listPayments() {
    const payments = await this.paymentRepository.find({
      where: { softDelete: false },
    });
    if (payments.length == 0) {
      return [];
    }
    return { payments };
  }

  async getPaymentById(id: string) {
    const payment = await this.paymentRepository.findOne({
      where: { id, softDelete: false },
    });
    return payment;
  }

  async deletePayment(id: string) {
    const payment = await this.paymentRepository.findOne({ where: { id } });
    payment.softDelete = true;
    await this.paymentRepository.save(payment);
  }
}
