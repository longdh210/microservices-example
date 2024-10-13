export declare class OrderEntity {
    id: string;
    customerId: string;
    productIds: string[];
    prices: number[];
    createdAt: Date;
    softDelete: boolean;
}
