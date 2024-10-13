import { AppService } from './app.service';
import { AddOrderDto } from './dto/add-order.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addOrder(addOrder: AddOrderDto): Promise<import("./entities/order-service.entity").OrderEntity>;
    listOrders(): Promise<{
        orders: import("./entities/order-service.entity").OrderEntity[];
    }>;
    getOrderById({ id }: {
        id: any;
    }): Promise<import("./entities/order-service.entity").OrderEntity>;
    deleteOrder({ id }: {
        id: any;
    }): Promise<import("./entities/order-service.entity").OrderEntity>;
}
