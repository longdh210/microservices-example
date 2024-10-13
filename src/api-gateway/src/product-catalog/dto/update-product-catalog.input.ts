import { PartialType } from '@nestjs/mapped-types';
import { AddProductDto } from './create-product-catalog.input';

export class UpdateProductDto extends PartialType(AddProductDto) {
  id: string;
}
