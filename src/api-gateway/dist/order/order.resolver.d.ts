import { OrderService } from './order.service';
export declare class OrderResolver {
    private readonly orderService;
    constructor(orderService: OrderService);
    addOrder(customerId: string, productIds: string[], prices: number[]): Promise<any>;
    listOrder(): Promise<any>;
    getOrder(id: string): Promise<any>;
    deleteOrder(id: string): Promise<any>;
}
