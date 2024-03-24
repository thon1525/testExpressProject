"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieValidation = void 0;
const zod_1 = require("zod");
exports.MovieValidation = zod_1.z.object({
    name: zod_1.z.string().min(3).max(25),
    released_on: zod_1.z.date(),
});
//# sourceMappingURL=MovieValidation.js.map