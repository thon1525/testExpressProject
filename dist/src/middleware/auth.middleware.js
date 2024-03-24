"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateUser(req, res, next) {
    jsonwebtoken_1.default.verify(req.headers.authorization.replace("Bearer ", ""), process.env.SECRET_KEY || "YOUR_SECRET", function (err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        }
        else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}
exports.validateUser = validateUser;
//# sourceMappingURL=auth.middleware.js.map