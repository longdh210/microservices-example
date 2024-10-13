import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCatalogService } from './product-catalog.service';

@Resolver('ProductCatalog')
export class ProductCatalogResolver {
  constructor(private readonly productCatalogService: ProductCatalogService) {}

  @Mutation('addProduct')
  async addProduct(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('picture') picture: string,
    @Args('price') price: number,
    @Args('categories') categories: string[],
  ) {
    return await this.productCatalogService.addProduct({
      name,
      description,
      picture,
      price,
      categories,
    });
  }

  @Mutation('updateProduct')
  async update(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('picture') picture: string,
    @Args('price') price: number,
    @Args('categories') categories: string[],
  ) {
    return await this.productCatalogService.updateProduct({
      id,
      name,
      description,
      picture,
      price,
      categories,
    });
  }

  @Query('products')
  async listProduct() {
    return await this.productCatalogService.listProduct();
  }

  @Query('product')
  async getProduct(@Args('id') id: string) {
    return this.productCatalogService.getProdcut({ id });
  }

  @Mutation('deleteProduct')
  deleteProduct(@Args('id') id: string) {
    return this.productCatalogService.deleteProduct({ id });
  }
}
