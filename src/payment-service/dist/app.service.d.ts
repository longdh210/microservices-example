import { PaymentEntity } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { AddPaymentDto } from './dto/add-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class AppService {
    private paymentRepository;
    constructor(paymentRepository: Repository<PaymentEntity>);
    addPayment(addPaymentDto: AddPaymentDto): Promise<void>;
    updatePayment(updatePaymentDto: UpdatePaymentDto): Promise<void>;
    listPayments(): Promise<{
        payments: PaymentEntity[];
    }>;
    getPaymentById(id: string): Promise<PaymentEntity>;
    deletePayment(id: string): Promise<void>;
}
