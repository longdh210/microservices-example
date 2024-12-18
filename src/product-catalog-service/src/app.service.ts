import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCatalogEntity } from './entities/product-catalog.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductCatalogEntity)
    private productCatalogRepository: Repository<ProductCatalogEntity>,
  ) {}

  async addProduct(addProductDto: AddProductDto) {
    const newProduct = this.productCatalogRepository.create({
      ...addProductDto,
    });
    return await this.productCatalogRepository.save(newProduct);
  }

  async updateProductById(updateProductDto: UpdateProductDto) {
    const product = await this.productCatalogRepository.findOne({
      where: { id: updateProductDto.id, softDelete: false },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    for (const key in updateProductDto) {
      if (updateProductDto[key] !== '') {
        product[key] = updateProductDto[key];
      }
    }

    return await this.productCatalogRepository.save(product);
  }

  async listProducts() {
    const products = await this.productCatalogRepository.find({
      where: { softDelete: false },
    });
    if (products.length == 0) {
      return [];
    }
    return { products };
  }

  async getProductById(id: string) {
    return await this.productCatalogRepository.findOne({
      where: { id, softDelete: false },
    });
  }

  async deleteProductById(id: string) {
    const product = await this.productCatalogRepository.findOne({
      where: { id },
    });
    product.softDelete = true;
    return await this.productCatalogRepository.save(product);
  }
}
