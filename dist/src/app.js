"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions_1 = require("./config/corsOptions");
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./route/product.route");
const movie_route_1 = require("./route/movie.route");
const hello_route_1 = require("./route/hello.route");
const globalTime_middleware_1 = require("./middleware/globalTime.middleware");
const express_1 = __importDefault(require("express"));
const globalError_middleware_1 = require("./middleware/globalError.middleware");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express_1.default.json());
app.use("/api/movie", movie_route_1.movieRouter);
app.use("/api/product", product_route_1.productRouter);
app.use("/api/hello", hello_route_1.helloRouter);
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.use(globalTime_middleware_1.globalTime);
app.use(globalError_middleware_1.globalError);
exports.default = app;
//# sourceMappingURL=app.js.map