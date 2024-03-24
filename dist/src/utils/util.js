"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(User) {
    /*
     To create a token JsonWebToken (JWT) receive's 3 parameter
     1. Payload -  This contains the claims or data you want to include in the token.
     2. Secret Key - A secure key known only to the server used for signing the token.
     3. expiration -  Additional settings like token expiration or algorithm selection.
     */
    // !! Don't Provide the secret openly, keep it in the .env file. I am Keeping Open just for demonstration
    // ** This is our JWT Token
    return jsonwebtoken_1.default.sign({ _id: User === null || User === void 0 ? void 0 : User._id, email: User === null || User === void 0 ? void 0 : User.email }, process.env.SECRET_KEY || "YOUR_SECRET", {
        expiresIn: "1d",
    });
}
exports.generateToken = generateToken;
//# sourceMappingURL=util.js.map