
import { NextFunction, Request, Response } from 'express';
import { productModel } from '../databases/models/productModel';
import { BaseCustomError } from '../middleware/BaseCustomError';
import { StatusCode } from '../StatusCode/StatusCode';

export const productController={
    getProduct: async function(req: Request, res: Response) {
        const product = await productModel.find({});
        res.json({status:"success", message: "Movies list found!!!", data:product });
       },
     createProduct: async function(req: Request, res: Response,_next: NextFunction) {
       try {
        const insertProduct = await new productModel({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productQty: req.body.productQty,
        }).save();

        res.json({ status: "success", message: "Product created successfully!", data: insertProduct });
       } catch (error: unknown) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const customError = new BaseCustomError((error as any).message,StatusCode.InternalServerError );
        _next(customError);
       }
       },
}