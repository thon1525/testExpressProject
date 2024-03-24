"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductSchema = new mongoose_1.default.Schema({
    productId: {
        type: String,
    },
    productName: {
        type: String,
        trim: true,
        required: true,
    },
    productPrice: {
        type: Number,
        trim: true,
        required: true,
    },
    productQty: {
        type: Number,
        trim: true,
        required: true,
    },
});
//# sourceMappingURL=ProductSchema.js.map