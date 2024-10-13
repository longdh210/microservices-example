import { AddProductDto } from './create-product-catalog.input';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<AddProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    id: string;
}
export {};
