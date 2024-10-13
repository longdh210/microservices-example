"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_catalog_input_1 = require("./create-product-catalog.input");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_product_catalog_input_1.AddProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product-catalog.input.js.map