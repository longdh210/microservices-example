import { AddPaymentDto } from './create-payment.input';
declare const UpdatePaymentInput_base: import("@nestjs/mapped-types").MappedType<Partial<AddPaymentDto>>;
export declare class UpdatePaymentInput extends UpdatePaymentInput_base {
    id: number;
}
export {};
