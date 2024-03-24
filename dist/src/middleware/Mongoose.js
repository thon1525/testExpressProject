"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BaseCustomError_1 = require("./BaseCustomError");
const ValidateMongoose = (req, res, _next) => {
    const { movieId } = req.params;
    if (!mongoose_1.default.isValidObjectId(movieId)) {
        const customError = new BaseCustomError_1.BaseCustomError('id Invalide', 404);
        console.log(customError.statusCode);
        _next(customError);
    }
    _next();
};
exports.ValidateMongoose = ValidateMongoose;
//# sourceMappingURL=Mongoose.js.map