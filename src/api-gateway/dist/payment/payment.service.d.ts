import { OnModuleInit } from '@nestjs/common';
import { AddPaymentDto } from './dto/create-payment.input';
import { ClientGrpc } from '@nestjs/microservices';
export declare class PaymentService implements OnModuleInit {
    private readonly paymentClient;
    private paymentService;
    constructor(paymentClient: ClientGrpc);
    onModuleInit(): void;
    addPayment(addPaymentDto: AddPaymentDto): Promise<any>;
    listPayment(): Promise<any>;
    getPayment({ id }: {
        id: any;
    }): Promise<any>;
    deletePayment({ id }: {
        id: any;
    }): Promise<any>;
}
