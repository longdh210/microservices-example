"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Payment Successful"] = 0] = "Payment Successful";
    Status[Status["Payment Failed"] = 1] = "Payment Failed";
    Status[Status["In Delivery"] = 2] = "In Delivery";
    Status[Status["Packing"] = 3] = "Packing";
})(Status || (exports.Status = Status = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["Internet Banking"] = 0] = "Internet Banking";
    PaymentMethod[PaymentMethod["E-Wallet"] = 1] = "E-Wallet";
    PaymentMethod[PaymentMethod["COD"] = 2] = "COD";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
//# sourceMappingURL=enum.js.map