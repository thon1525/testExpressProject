
import mongoose from 'mongoose';
import { productModel } from '../productModel';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;
describe('Product Model', () => {

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });
  
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new product', async () => {
    const productData = {
      productName: 'Test Product',
      productPrice: 10.99,
      productQty: 100,
    };

    const product = await productModel.create(productData);
    expect(product.productName).toBe('Test Product');
    expect(product.productPrice).toBe(10.99);
    expect(product.productQty).toBe(100);
  });

  it('should require productName, productPrice, and productQty', async () => {
    const productData = {};
    let error;

    try {
      await productModel.create(productData);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.errors.productName).toBeDefined();
    expect(error.errors.productPrice).toBeDefined();
    expect(error.errors.productQty).toBeDefined();
  });
});
