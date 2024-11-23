import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { AddProductDto } from './dto/create-product-catalog.input';
import { UpdateProductDto } from './dto/update-product-catalog.input';

interface IProductCatalogService {
  addProduct({
    name,
    description,
    picture,
    price,
    categories,
  }: AddProductDto): Observable<any>;
  updateProduct({
    id,
    name,
    description,
    picture,
    price,
    categories,
  }: UpdateProductDto): Observable<any>;
  listProduct({}): Observable<any>;
  getProduct({ id }): Observable<any>;
  deleteProduct({ id }): Observable<any>;
}

@Injectable()
export class ProductCatalogService implements OnModuleInit {
  private productCatalogService: IProductCatalogService;

  constructor(
    @Inject('PRODUCT_CATALOG_PACKAGE')
    private readonly productCatalogClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.productCatalogService =
      this.productCatalogClient.getService<IProductCatalogService>(
        'ProductCatalogService',
      );
  }

  async addProduct(addProductDto: AddProductDto) {
    const newProduct = await lastValueFrom(
      this.productCatalogService.addProduct(addProductDto),
    );
    return newProduct;
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    return await lastValueFrom(
      this.productCatalogService.updateProduct({ ...updateProductDto }),
    );
  }

  async listProduct() {
    const listProduct = await lastValueFrom(
      this.productCatalogService.listProduct(null),
    );
    return listProduct.products;
  }

  async getProdcut({ id }) {
    const product = await lastValueFrom(
      this.productCatalogService.getProduct({ id }),
    );
    return product;
  }

  async deleteProduct({ id }) {
    return await lastValueFrom(
      this.productCatalogService.deleteProduct({ id }),
    );
  }
}
