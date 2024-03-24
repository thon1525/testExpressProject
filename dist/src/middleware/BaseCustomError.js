"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCustomError = void 0;
class BaseCustomError extends Error {
    constructor(message, statusCode) {
        super(message); // Ensure message is initialized, even if it's undefined
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.BaseCustomError = BaseCustomError;
//# sourceMappingURL=BaseCustomError.js.map