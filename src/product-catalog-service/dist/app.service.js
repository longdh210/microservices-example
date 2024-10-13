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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_catalog_entity_1 = require("./entities/product-catalog.entity");
const typeorm_2 = require("typeorm");
let AppService = class AppService {
    constructor(productCatalogRepository) {
        this.productCatalogRepository = productCatalogRepository;
    }
    async addProduct(addProductDto) {
        const newProduct = this.productCatalogRepository.create({
            ...addProductDto,
        });
        await this.productCatalogRepository.save(newProduct);
    }
    async updateProductById(updateProductDto) {
        const product = await this.productCatalogRepository.findOne({
            where: { id: updateProductDto.id, softDelete: false },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        for (const key in updateProductDto) {
            if (updateProductDto[key] !== '') {
                product[key] = updateProductDto[key];
            }
        }
        await this.productCatalogRepository.save(product);
    }
    async listProducts() {
        const data = await this.productCatalogRepository.find({
            where: { softDelete: false },
        });
        return { products: data };
    }
    async getProductById(id) {
        return await this.productCatalogRepository.findOne({
            where: { id, softDelete: false },
        });
    }
    async deleteProductById(id) {
        const product = await this.productCatalogRepository.findOne({
            where: { id },
        });
        product.softDelete = true;
        await this.productCatalogRepository.save(product);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_catalog_entity_1.ProductCatalogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map