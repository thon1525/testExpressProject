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
const movie_1 = require("../model/movie");
const mongoose_1 = __importDefault(require("mongoose"));
describe("Product Model", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://localhost:27017/School", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connection.close();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield movie_1.movieModel.deleteMany({});
    }));
    it("should create a new movie", () => __awaiter(void 0, void 0, void 0, function* () {
        const productData = {
            name: "Test movie",
            released_on: "2012-04-02",
        };
        const product = yield movie_1.movieModel.create(productData);
        expect(product.name).toBe("Test movie");
        expect(product.released_on.toISOString().split("T")[0]).toBe("2012-04-02");
    }));
    it("should require name , released_on", () => __awaiter(void 0, void 0, void 0, function* () {
        const productData = {};
        let error;
        try {
            yield movie_1.movieModel.create(productData);
        }
        catch (e) {
            error = e;
        }
        expect(error).toBeDefined();
        expect(error.errors.name).toBeDefined();
        expect(error.errors.released_on).toBeDefined();
    }));
});
//# sourceMappingURL=movie.model.test.js.map