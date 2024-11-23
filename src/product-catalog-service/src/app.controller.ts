import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('ProductCatalogService', 'AddProduct')
  async addProduct(addProductDto: AddProductDto) {
    return await this.appService.addProduct(addProductDto);
  }

  @GrpcMethod('productCatalogService', 'UpdateProduct')
  async updateProduct(updateProductDto: UpdateProductDto) {
    return await this.appService.updateProductById(updateProductDto);
  }

  @GrpcMethod('ProductCatalogService', 'ListProduct')
  async listProducts() {
    // TODO: handle error when list empty
    return await this.appService.listProducts();
  }

  @GrpcMethod('ProductCatalogService', 'GetProduct')
  async getProductById({ id }) {
    return await this.appService.getProductById(id);
  }

  @GrpcMethod('ProductCatalogService', 'DeleteProduct')
  async deleteProductById({ id }) {
    return await this.appService.deleteProductById(id);
  }
}
