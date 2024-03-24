import { connect, set } from "mongoose";
import dotenv from "dotenv";
//const MONGO_DB_URI = process.env.MONGO_DB_URI

const MONGO_DB_URI = 'mongodb://localhost:27017/School'
dotenv.config();
// connection to db
 const ConnectDatabase =  ( async () => {
  try {
    set("strictQuery", false);
    const db = await connect(MONGO_DB_URI);
    console.log("MongoDB connected to", db.connection.name);
  } catch (error) {    console.error(error);
  }
})();

export {ConnectDatabase}