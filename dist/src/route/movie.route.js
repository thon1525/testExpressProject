"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controller/movie.controller");
const Mongoose_1 = require("../middleware/Mongoose");
const MovieValidation_1 = require("../Schemas/MovieValidation");
const MovieUser_1 = require("../Validation/MovieUser");
exports.movieRouter = express_1.default.Router();
exports.movieRouter.get('/', movie_controller_1.movieController.getAll);
exports.movieRouter.post('/', (0, MovieUser_1.MovieUser)(MovieValidation_1.MovieValidation), movie_controller_1.movieController.create);
// search data in post 
exports.movieRouter.get('/search', movie_controller_1.movieController.searchmovie);
exports.movieRouter.get('/:movieId', Mongoose_1.ValidateMongoose, movie_controller_1.movieController.getById);
exports.movieRouter.put('/:movieId', movie_controller_1.movieController.updateById);
exports.movieRouter.delete('/:movieId', movie_controller_1.movieController.deleteById);
//# sourceMappingURL=movie.route.js.map