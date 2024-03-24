"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalTime = void 0;
const globalTime = (req, res, _next) => {
    const requestTime = new Date();
    console.log(`[${requestTime.toLocaleString()}] ${req.method} ${req.originalUrl}`);
    _next();
};
exports.globalTime = globalTime;
//# sourceMappingURL=globalTime.middleware.js.map