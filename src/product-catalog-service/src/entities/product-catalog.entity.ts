import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCatalogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  price: number;

  @Column('text', { array: true })
  categories: string[];

  @Column({ default: false })
  softDelete: boolean;
}
