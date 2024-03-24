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
exports.movieController = void 0;
const BaseCustomError_1 = require("../middleware/BaseCustomError");
const movie_1 = require("../model/movie");
exports.movieController = {
    getById: function (req, res, _next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const useMovie = yield movie_1.movieModel.findById(req.params.movieId);
                console.log("useMovie", useMovie);
                if (!useMovie) {
                    console.log("useMovie", useMovie);
                    throw new Error("Movie not found");
                }
                res
                    .status(200)
                    .json({ status: "success", message: "Movie found!!!", data: useMovie });
            }
            catch (err) {
                const customError = new BaseCustomError_1.BaseCustomError(err.message, 500);
                _next(customError);
            }
        });
    },
    getAll: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield movie_1.movieModel.find({});
            res.json({
                status: "success",
                message: "Movies list found!!!",
                data: movies,
            });
        });
    },
    updateById: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield movie_1.movieModel.findByIdAndUpdate(req.params.movieId, {
                name: req.body.name,
            });
            res.json({
                status: "success",
                message: "Movie updated successfully!!!",
                data: movie,
            });
        });
    },
    deleteById: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movie_1.movieModel.deleteOne({ _id: req.params.movieId });
            res.json({
                status: "success",
                message: "Movie deleted successfully!!!",
                data: null,
            });
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const m = yield new movie_1.movieModel({
                // movieId: Id,
                name: req.body.name,
                released_on: req.body.released_on
            }).save();
            res.json({
                status: "success",
                message: "Movie added successfully!!!",
                data: m,
            });
        });
    },
    searchmovie: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const Id = 'v1';
            const item = yield movie_1.movieModel.find({
                name: { $regex: req.body.name, $options: "i" },
            });
            res.json({
                status: "success",
                message: "Movie found successfully!!!",
                data: item,
            });
        });
    },
};
//# sourceMappingURL=movie.controller.js.map