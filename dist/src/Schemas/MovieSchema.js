"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.MovieSchema = new mongoose_1.default.Schema({
    movieId: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    released_on: {
        type: Date,
        trim: true,
        required: true,
    },
    DateRecord: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now,
    },
});
//# sourceMappingURL=MovieSchema.js.map