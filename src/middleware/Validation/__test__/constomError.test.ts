import { z } from "zod";
import { constomError } from "../constomError";
import { NextFunction,Response,Request } from "express";
import { StatusCode } from "../../../StatusCode/StatusCode";

// customError.test.js
describe('constomError middleware', () => {
  test('example test', () => {
    const schema = z.object({
        name: z.string(),
        age: z.number(),
      });
      const req = { body: { name: 'John', age: 30 } } as Request;
      const res = {} as Response;
      const next = jest.fn() as NextFunction;
  
      const middleware = constomError(schema);
      middleware(req, res, next);
  
      expect(next).toHaveBeenCalled();
    expect(1).toEqual(1);
  });
  
  it('should return 422 Unprocessable Entity if request body is invalid', () => {
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });
    const errorMessages = [{ message:  "age is Expected number, received string" }];
    const req = { body: { name: 'John', age: '30' } } as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    const middleware = constomError(schema);
    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(StatusCode.UnprocessableEntity);
   
    // expect(1).toEqual(1)
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid data', details: errorMessages });
    
  });
});
