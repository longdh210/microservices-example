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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_service_1 = require("./order.service");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async addOrder(customerId, productIds, prices) {
        return await this.orderService.addOrder({ customerId, productIds, prices });
    }
    async listOrder() {
        return await this.orderService.listOrder();
    }
    async getOrder(id) {
        return await this.orderService.getOrder({ id });
    }
    async deleteOrder(id) {
        return await this.orderService.deleteOrder({ id });
    }
};
exports.OrderResolver = OrderResolver;
__decorate([
    (0, graphql_1.Mutation)('addOrder'),
    __param(0, (0, graphql_1.Args)('customerId')),
    __param(1, (0, graphql_1.Args)('productIds')),
    __param(2, (0, graphql_1.Args)('prices')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Array]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrder", null);
__decorate([
    (0, graphql_1.Query)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "listOrder", null);
__decorate([
    (0, graphql_1.Query)('order'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
__decorate([
    (0, graphql_1.Mutation)('deleteOrder'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteOrder", null);
exports.OrderResolver = OrderResolver = __decorate([
    (0, graphql_1.Resolver)('Order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
//# sourceMappingURL=order.resolver.js.map