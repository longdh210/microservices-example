import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AddOrderDto } from 'src/dto/add-order.dto';
export declare class OrderService implements OnModuleInit {
    private readonly orderClient;
    private orderService;
    constructor(orderClient: ClientGrpc);
    onModuleInit(): void;
    addOrder(addOrderDto: AddOrderDto): Promise<any>;
    listOrder(): Promise<any>;
    getOrder({ id }: {
        id: any;
    }): Promise<any>;
    deleteOrder({ id }: {
        id: any;
    }): Promise<any>;
}
