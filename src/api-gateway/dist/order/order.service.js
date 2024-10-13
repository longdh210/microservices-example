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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let OrderService = class OrderService {
    constructor(orderClient) {
        this.orderClient = orderClient;
    }
    onModuleInit() {
        this.orderService =
            this.orderClient.getService('OrderService');
    }
    async addOrder(addOrderDto) {
        return await (0, rxjs_1.lastValueFrom)(this.orderService.addOrder(addOrderDto));
    }
    async listOrder() {
        const listOrder = await (0, rxjs_1.lastValueFrom)(this.orderService.listOrders());
        return listOrder.orders;
    }
    async getOrder({ id }) {
        const order = await (0, rxjs_1.lastValueFrom)(this.orderService.getOrder(id));
        return order;
    }
    async deleteOrder({ id }) {
        return await (0, rxjs_1.lastValueFrom)(this.orderService.deleteOrder({ id }));
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ORDER_PACKAGE')),
    __metadata("design:paramtypes", [Object])
], OrderService);
//# sourceMappingURL=order.service.js.map