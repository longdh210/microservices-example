"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let PaymentService = class PaymentService {
    constructor(paymentClient) {
        this.paymentClient = paymentClient;
    }
    onModuleInit() {
        this.paymentService =
            this.paymentClient.getService('PaymentService');
    }
    async addPayment(addPaymentDto) {
        return await (0, rxjs_1.lastValueFrom)(this.paymentService.addPayment(addPaymentDto));
    }
    async listPayment() {
        const listPayment = await (0, rxjs_1.lastValueFrom)(this.paymentService.listPayment());
        return listPayment.payments;
    }
    async getPayment({ id }) {
        const payment = await (0, rxjs_1.lastValueFrom)(this.paymentService.getPayment(id));
        return payment;
    }
    async deletePayment({ id }) {
        return await (0, rxjs_1.lastValueFrom)(this.paymentService.deletePayment({ id }));
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PAYMENT_PACKAGE')),
    __metadata("design:paramtypes", [Object])
], PaymentService);
//# sourceMappingURL=payment.service.js.map