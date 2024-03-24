"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import mongoose from 'mongoose';
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./src/app"));
const mongoose_1 = require("./src/utils/mongoose");
(0, dotenv_1.config)();
const port = process.env.PORT || 3000;
//const MONGO_DB_URI = process.env.MONGO_DB_URI
mongoose_1.ConnectDatabase.then(() => {
    app_1.default.listen(port, () => {
        console.log(`Listening: http://localhost:${port}`);
    });
}).catch((err) => {
    console.log("database error: ", err);
    console.error('Database connection error:', err);
});
//# sourceMappingURL=index.js.map