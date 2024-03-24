"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product.controller");
const Mongoose_1 = require("../middleware/Mongoose");
exports.productRouter = express_1.default.Router();
exports.productRouter.get('/', Mongoose_1.ValidateMongoose, product_controller_1.productController.getProduct);
// create route for insert data          
exports.productRouter.post('/', Mongoose_1.ValidateMongoose, product_controller_1.productController.createProduct);
//# sourceMappingURL=product.route.js.map