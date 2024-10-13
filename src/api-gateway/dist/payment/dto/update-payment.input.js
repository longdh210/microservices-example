"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentInput = void 0;
const create_payment_input_1 = require("./create-payment.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdatePaymentInput extends (0, mapped_types_1.PartialType)(create_payment_input_1.AddPaymentDto) {
}
exports.UpdatePaymentInput = UpdatePaymentInput;
//# sourceMappingURL=update-payment.input.js.map