import express, { Router } from "express";

import userRouter from "./user";

import { errorHandlingMiddleware } from "../middleware";

const router: Router = express.Router();

router.use("/users", userRouter);

router.use(errorHandlingMiddleware.handleAPIRouteNotFound);

export default router;
