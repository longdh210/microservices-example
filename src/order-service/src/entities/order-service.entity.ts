import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerId: string;

  @Column('text', { array: true })
  productIds: string[];

  @Column('int', { array: true })
  prices: number[];

  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Column({ default: false })
  softDelete: boolean;
}
