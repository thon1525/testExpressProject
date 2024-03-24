import { userModel } from "../models/userModel";

class UserRepo {
    async saveUser(user: { email: string; password: string }) {
      return await userModel.create(user);
    }
  }
  export  {UserRepo};