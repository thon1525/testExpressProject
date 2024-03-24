
//import mongoose from 'mongoose';
import { config } from "dotenv";
import app from './src/app';
import { ConnectDatabase } from './src/utils/mongoose';
config();
const port = process.env.PORT || 3000;
//const MONGO_DB_URI = process.env.MONGO_DB_URI
ConnectDatabase.then(() => {
  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
}).catch((err) => {
  console.log("database error: ", err);
  console.error('Database connection error:', err);
});
