
//import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { movieModel } from "../movieModel";
import mongoose from "mongoose";

let mongoServer: MongoMemoryServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
describe("Product Model", () => {


  it("should create a new movie", async () => {
    const productData = {
      name: "Test movie",
      released_on: "2012-04-02",
    };

    const product = await movieModel.create(productData);
    expect(product.name).toBe("Test movie");
    expect(product.released_on.toISOString().split("T")[0]).toBe("2012-04-02");
  });

  it("should require name , released_on", async () => {
    const productData = {};
    let error;

    try {
      await movieModel.create(productData);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect(error.errors.name).toBeDefined();
    expect(error.errors.released_on).toBeDefined();
  });
});
