import { Request, Response, NextFunction } from 'express';
import { globalError } from '../globalError.middleware';
import { BaseCustomError } from '../BaseCustomError';

describe('globalError middleware', () => {
    // create function this test globel
    it('should handle BaseCustomError', () => {
      const err = new BaseCustomError('Test error', 400);
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
      const nextMock: NextFunction = jest.fn();
    // this code process this add error 
      globalError(err, req, res, nextMock);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Test error',
      });
      expect(nextMock).toHaveBeenCalled();
    });
  
    it('should call next for non-BaseCustomError', () => {
      const err = new Error('Test error');
      const req = {} as Request;
      const res = {} as Response;
      const nextMock: NextFunction = jest.fn();
  
      globalError(err, req, res, nextMock);
  
      expect(nextMock).toHaveBeenCalled();
    });
  });