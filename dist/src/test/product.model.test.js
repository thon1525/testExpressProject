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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const mongoose_1 = __importDefault(require("mongoose"));
describe('Product Model', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://localhost:27017/School', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connection.close();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield product_1.productModel.deleteMany({});
    }));
    it('should create a new product', () => __awaiter(void 0, void 0, void 0, function* () {
        const productData = {
            productName: 'Test Product',
            productPrice: 10.99,
            productQty: 100,
        };
        const product = yield product_1.productModel.create(productData);
        expect(product.productName).toBe('Test Product');
        expect(product.productPrice).toBe(10.99);
        expect(product.productQty).toBe(100);
    }));
    it('should require productName, productPrice, and productQty', () => __awaiter(void 0, void 0, void 0, function* () {
        const productData = {};
        let error;
        try {
            yield product_1.productModel.create(productData);
        }
        catch (e) {
            error = e;
        }
        expect(error).toBeDefined();
        expect(error.errors.productName).toBeDefined();
        expect(error.errors.productPrice).toBeDefined();
        expect(error.errors.productQty).toBeDefined();
    }));
});
//# sourceMappingURL=product.model.test.js.map