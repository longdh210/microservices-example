import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderId: string;

  @Column()
  status: string;

  @Column()
  paymentMethod: string;

  @Column({ default: false })
  softDelete: boolean;
}
