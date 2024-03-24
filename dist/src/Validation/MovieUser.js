"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieUser = void 0;
const zod_1 = require("zod");
const StatusCode_1 = require("../StatusCode/StatusCode");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MovieUser(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }));
                res.status(StatusCode_1.StatusCode.UnprocessableEntity).json({ error: 'Invalid data', details: errorMessages });
            }
            else {
                res.status(StatusCode_1.StatusCode.InternalServerError).json({ error: 'Internal Server Error' });
            }
        }
    };
}
exports.MovieUser = MovieUser;
//# sourceMappingURL=MovieUser.js.map