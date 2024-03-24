"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_1 = require("../model/product");
exports.productController = {
    getProduct: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_1.productModel.find({});
            res.json({ status: "success", message: "Movies list found!!!", data: product });
        });
    },
    createProduct: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertProduct = yield new product_1.productModel({
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                productQty: req.body.productQty,
            }).save();
            res.json({ status: "success", message: "Product created successfully!", data: insertProduct });
        });
    },
};
//# sourceMappingURL=product.controller.js.map