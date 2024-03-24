"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema_1 = require("../Schemas/ProductSchema");
exports.productModel = mongoose_1.default.model("products", ProductSchema_1.ProductSchema);
//# sourceMappingURL=product.js.map