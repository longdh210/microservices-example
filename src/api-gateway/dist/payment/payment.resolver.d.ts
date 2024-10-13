import { PaymentService } from './payment.service';
export declare class PaymentResolver {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(orderId: string, status: string, paymentMethod: string): Promise<any>;
    listPayment(): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
