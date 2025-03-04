import express, { Router } from "express";

import { userController } from "../controllers";

import { errorHandlingMiddleware } from "../middleware";

const router: Router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

router.use(errorHandlingMiddleware.handleAPIRouteNotFound);

export default router;
