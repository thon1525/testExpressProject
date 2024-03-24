
import mongoose, { ConnectOptions } from 'mongoose';
import { userModel } from '../userModel';


describe('Product Model', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/School', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions);
      });
    
  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await userModel.deleteMany({});
  });

  it('should create a new product', async () => {
    const productData = {
        email: 'thon@gmialcom',
        password: "123456",
    };

    const product = await userModel.create(productData);
    expect(product.email).toBe('thon@gmialcom');
    expect(product.password).toBe('123456');
  
  });

  it('should require productName, productPrice, and productQty', async () => {
    const productData = {};
    let error;

    try {
      await userModel.create(productData);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.errors.email).toBeDefined();
    expect(error.errors.password).toBeDefined();
  });
});
