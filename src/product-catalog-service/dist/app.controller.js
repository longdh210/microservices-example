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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async addProduct(addProductDto) {
        return await this.appService.addProduct(addProductDto);
    }
    async updateProduct(updateProductDto) {
        return await this.appService.updateProductById(updateProductDto);
    }
    async listProducts() {
        return await this.appService.listProducts();
    }
    async getProductById({ id }) {
        return await this.appService.getProductById(id);
    }
    async deleteProductById({ id }) {
        return await this.appService.deleteProductById(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.GrpcMethod)('ProductCatalogService', 'AddProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addProduct", null);
__decorate([
    (0, microservices_1.GrpcMethod)('productCatalogService', 'UpdateProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateProduct", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductCatalogService', 'ListProducts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listProducts", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductCatalogService', 'GetProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, microservices_1.GrpcMethod)('ProductCatalogService', 'DeleteProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteProductById", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map