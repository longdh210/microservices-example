import { ProductCatalogService } from './product-catalog.service';
export declare class ProductCatalogResolver {
    private readonly productCatalogService;
    constructor(productCatalogService: ProductCatalogService);
    addProduct(name: string, description: string, picture: string, price: number, categories: string[]): Promise<any>;
    update(id: string, name: string, description: string, picture: string, price: number, categories: string[]): Promise<any>;
    listProduct(): Promise<any>;
    getProduct(id: string): Promise<any>;
    deleteProduct(id: string): Promise<any>;
}
