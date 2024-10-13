import { OnModuleInit } from '@nestjs/common';
import { OrderEntity } from './entities/order-service.entity';
import { Repository } from 'typeorm';
import { AddOrderDto } from './dto/add-order.dto';
import { ClientGrpc } from '@nestjs/microservices';
export declare class AppService implements OnModuleInit {
    private orderRepository;
    private productCatalogClient;
    private paymentClient;
    private productCatalogService;
    private paymentSerivce;
    constructor(orderRepository: Repository<OrderEntity>, productCatalogClient: ClientGrpc, paymentClient: ClientGrpc);
    onModuleInit(): void;
    addOrder(addOrder: AddOrderDto): Promise<OrderEntity>;
    getOrderById(id: string): Promise<OrderEntity>;
    listOrders(): Promise<{
        orders: OrderEntity[];
    }>;
    deleteOrderById(id: string): Promise<OrderEntity>;
}
