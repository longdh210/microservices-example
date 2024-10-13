import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AddProductDto } from './dto/create-product-catalog.input';
import { UpdateProductDto } from './dto/update-product-catalog.input';
export declare class ProductCatalogService implements OnModuleInit {
    private readonly productCatalogClient;
    private productCatalogService;
    constructor(productCatalogClient: ClientGrpc);
    onModuleInit(): void;
    addProduct(addProductDto: AddProductDto): Promise<any>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<any>;
    listProduct(): Promise<any>;
    getProdcut({ id }: {
        id: any;
    }): Promise<any>;
    deleteProduct({ id }: {
        id: any;
    }): Promise<any>;
}
