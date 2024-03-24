/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from "bcrypt";
import { generateToken } from "../utils/util";
import { UserRepo } from "../databases/repo/userRepo";

class UserService {
  public userRepo: UserRepo;
  static mock: any;

  constructor() {
    this.userRepo = new UserRepo();
  }

  async signUp(
    userData: { email: string; password: string },
  ) {
    try {
      
      const { email, password } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await this.userRepo.saveUser({
        email,
        password: hashedPassword,
      });
      const token = generateToken(newUser);
      return { newUser, token };
    } catch (err: unknown) {
      throw err;
    }
  }
}

export default UserService;
