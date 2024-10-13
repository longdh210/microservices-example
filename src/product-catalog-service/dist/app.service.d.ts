import { ProductCatalogEntity } from './entities/product-catalog.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class AppService {
    private productCatalogRepository;
    constructor(productCatalogRepository: Repository<ProductCatalogEntity>);
    addProduct(addProductDto: AddProductDto): Promise<void>;
    updateProductById(updateProductDto: UpdateProductDto): Promise<void>;
    listProducts(): Promise<{
        products: ProductCatalogEntity[];
    }>;
    getProductById(id: string): Promise<ProductCatalogEntity>;
    deleteProductById(id: string): Promise<void>;
}
