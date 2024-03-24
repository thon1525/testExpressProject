

import jwt from "jsonwebtoken";
export function generateToken(User) {
     /*
      To create a token JsonWebToken (JWT) receive's 3 parameter
      1. Payload -  This contains the claims or data you want to include in the token.
      2. Secret Key - A secure key known only to the server used for signing the token.
      3. expiration -  Additional settings like token expiration or algorithm selection.
      */
  
      // !! Don't Provide the secret openly, keep it in the .env file. I am Keeping Open just for demonstration
  
      // ** This is our JWT Token
      return jwt.sign(
        { _id: User?._id, email: User?.email },
        process.env.SECRET_KEY||"YOUR_SECRET",
        {
          expiresIn: "1d",
        }
      );
    }