

import { corsOptions } from "./config/corsOptions";
import cors from "cors";
import { productRouter } from "./route/product.route";
import { movieRouter } from "./route/movie.route";
import { globalTime } from "./middleware/globalTime.middleware";
import express from "express";
import { globalError } from "./middleware/globalError.middleware";
import { userRouter } from "./route/userRouter.route";

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());

app.use("/api/movie", movieRouter);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use(cors(corsOptions));

app.use(globalTime);
app.use(globalError);


export default app;


