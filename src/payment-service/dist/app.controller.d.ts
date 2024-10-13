import { AppService } from './app.service';
import { AddPaymentDto } from './dto/add-payment.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addPayment(addPaymentDto: AddPaymentDto): Promise<void>;
    listPayments(): Promise<{
        payments: import("./entities/payment.entity").PaymentEntity[];
    }>;
    getPaymentById({ id }: {
        id: any;
    }): Promise<import("./entities/payment.entity").PaymentEntity>;
    deletePayment({ id }: {
        id: any;
    }): Promise<void>;
}
