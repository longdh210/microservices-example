import { AppService } from './app.service';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addProduct(addProductDto: AddProductDto): Promise<void>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<void>;
    listProducts(): Promise<{
        products: import("./entities/product-catalog.entity").ProductCatalogEntity[];
    }>;
    getProductById({ id }: {
        id: any;
    }): Promise<import("./entities/product-catalog.entity").ProductCatalogEntity>;
    deleteProductById({ id }: {
        id: any;
    }): Promise<void>;
}
