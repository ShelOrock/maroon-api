import express, {
  Application,
  Request,
  Response,
  NextFunction
} from "express";

import apiRouter from "./routers";

import { HttpError } from "./types";

const app: Application = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use("/", (error: HttpError, _request: Request, response: Response, _nextFunction: NextFunction) => {
  response
    .status(error.status || 500)
    .send({ 
      message: error.message || "Internal Server Error"
    });
});

export default app;
