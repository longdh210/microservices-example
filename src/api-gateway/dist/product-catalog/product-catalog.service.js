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
exports.ProductCatalogService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let ProductCatalogService = class ProductCatalogService {
    constructor(productCatalogClient) {
        this.productCatalogClient = productCatalogClient;
    }
    onModuleInit() {
        this.productCatalogService =
            this.productCatalogClient.getService('ProductCatalogService');
    }
    async addProduct(addProductDto) {
        return await (0, rxjs_1.lastValueFrom)(this.productCatalogService.addProduct(addProductDto));
    }
    async updateProduct(updateProductDto) {
        return await (0, rxjs_1.lastValueFrom)(this.productCatalogService.updateProduct({ ...updateProductDto }));
    }
    async listProduct() {
        const listProduct = await (0, rxjs_1.lastValueFrom)(this.productCatalogService.listProduct());
        return listProduct.products;
    }
    async getProdcut({ id }) {
        const product = await (0, rxjs_1.lastValueFrom)(this.productCatalogService.getProduct({ id }));
        return product;
    }
    async deleteProduct({ id }) {
        return await (0, rxjs_1.lastValueFrom)(this.productCatalogService.deleteProduct({ id }));
    }
};
exports.ProductCatalogService = ProductCatalogService;
exports.ProductCatalogService = ProductCatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRODUCT_CATALOG_PACKAGE')),
    __metadata("design:paramtypes", [Object])
], ProductCatalogService);
//# sourceMappingURL=product-catalog.service.js.map