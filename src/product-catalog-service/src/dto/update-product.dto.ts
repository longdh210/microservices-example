export interface UpdateProductDto {
  id: string;
  name: string;
  description: string;
  picture: string;
  price: number;
  categories: string[];
}
