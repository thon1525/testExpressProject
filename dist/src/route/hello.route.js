"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = __importDefault(require("express"));
const hello_controller_1 = require("../controller/hello.controller");
exports.helloRouter = express_1.default.Router();
exports.helloRouter.get('/', hello_controller_1.helloController.getHello);
exports.helloRouter.get('/', hello_controller_1.helloController.getHello);
//# sourceMappingURL=hello.route.js.map