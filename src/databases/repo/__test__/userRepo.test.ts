import { UserRepo } from "../userRepo";
import { userModel } from "../../models/userModel";

describe("UserRepo", () => {
  let userRepo: UserRepo;
  // beforeEach(() => { userRepo = new UserRepo(); }); is used to create a new instance of UserRepo before each test case in the UserRepo test suite.
  // Creating a new instance means creating a new object based on a class or constructor function. OOP
  beforeEach(() => {
    userRepo = new UserRepo();
  });
  //it('should save a user', async () => { ... });: This defines a single test case with a description. The async () => { ... } part is an asynchronous function that contains the test logic.

  it("should save a user", async () => {
    //The code const mockCreate = jest.fn().mockResolvedValue({ email: 'test@example.com', password: 'password' }); creates a mock function mockCreate that resolves with the specified value { email: 'test@example.com', password: 'password' } when called. This mock function is then used to replace the implementation of the create method of userModel using jest.spyOn(userModel, 'create').mockImplementation(mockCreate);

    const mockCreate = jest
      .fn()
      .mockResolvedValue({ email: "test@example.com", password: "password" });
    jest.spyOn(userModel, "create").mockImplementation(mockCreate);

    // const testUser = await userRepo.saveUser(user); calls the saveUser method of userRepo with the user object as an argument and awaits the result.
    const user = { email: "test@example.com", password: "password" };
    const testUser = await userRepo.saveUser(user);

    //expect(mockCreate).toHaveBeenCalledWith(user); is an assertion that checks whether the mockCreate function was called with the user object as an argument during the test. This is typically used to verify that a function was called with the expected arguments.

    expect(mockCreate).toHaveBeenCalledWith(user);
    expect(testUser).toEqual({
      email: "test@example.com",
      password: "password",
    });

    mockCreate.mockRestore(); // Restore the original method after the test
  });
});
