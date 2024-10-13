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
exports.PaymentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const payment_service_1 = require("./payment.service");
let PaymentResolver = class PaymentResolver {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async create(orderId, status, paymentMethod) {
        return await this.paymentService.addPayment({
            orderId,
            status,
            paymentMethod,
        });
    }
    async listPayment() {
        return await this.paymentService.listPayment();
    }
    async findOne(id) {
        return await this.paymentService.getPayment({ id });
    }
    async remove(id) {
        return this.paymentService.deletePayment({ id });
    }
};
exports.PaymentResolver = PaymentResolver;
__decorate([
    (0, graphql_1.Mutation)('addPayment'),
    __param(0, (0, graphql_1.Args)('orderId')),
    __param(1, (0, graphql_1.Args)('status')),
    __param(2, (0, graphql_1.Args)('paymentMethod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('payments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "listPayment", null);
__decorate([
    (0, graphql_1.Query)('payment'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('deletePayment'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "remove", null);
exports.PaymentResolver = PaymentResolver = __decorate([
    (0, graphql_1.Resolver)('Payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentResolver);
//# sourceMappingURL=payment.resolver.js.map