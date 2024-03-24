"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema_1 = require("../Schemas/MovieSchema");
exports.movieModel = mongoose_1.default.model("Movie", MovieSchema_1.MovieSchema);
//# sourceMappingURL=movie.js.map