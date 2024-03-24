import { NextFunction ,Request,Response} from "express";
import { ValidateMongoose } from "../Mongoose";
import { BaseCustomError } from "../BaseCustomError";

/* eslint-disable @typescript-eslint/no-unused-vars */

describe('ValidateMongoose middleware', () => {
    let req: Request;
    let res: Response;
    let next: NextFunction;
  
    beforeEach(() => {
        req = {} as Request;
        res = {} as Response;
        next = jest.fn();
    });
    it('should pass', () => {
        req.params = { movieId: '123456789012345678901234' };
        ValidateMongoose(req, res, next);
        expect(next).toHaveBeenCalled();
     
    });

    it('should call next with error if the id is invalid', () => {
        req.params = { movieId: 'invalid_id' };
        const consoleSpy = jest.spyOn(console, 'log');
        ValidateMongoose(req, res, next);
        expect(next).toHaveBeenCalledWith(
          new BaseCustomError('id Invalide', 404)
        );
        expect(consoleSpy).toHaveBeenCalledWith(404);
        consoleSpy.mockRestore();
      });
});
