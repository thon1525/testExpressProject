"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const BaseCustomError_1 = require("./BaseCustomError");
function globalError(err, req, res, _next) {
    // Default to globalError500 if no status code is set
    //res to client
    console.log("w=erro", err);
    if (err instanceof BaseCustomError_1.BaseCustomError) {
        res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
        });
    }
    _next();
}
exports.globalError = globalError;
//# sourceMappingURL=globalError.middleware.js.map