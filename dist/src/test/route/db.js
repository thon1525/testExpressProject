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
exports.clearDatabase = exports.closeDatabase = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongod = mongodb_memory_server_1.MongoMemoryServer.create();
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield (yield mongod).getUri();
    yield mongoose_1.default.connect(url);
});
exports.connect = connect;
const closeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connections.dropDatabase();
    yield mongoose_1.default.connections.close();
    yield (yield mongod).stop();
});
exports.closeDatabase = closeDatabase;
const clearDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.clearDatabase = clearDatabase;
//# sourceMappingURL=db.js.map