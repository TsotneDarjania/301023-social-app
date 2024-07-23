import express from "express";
import UserController from "./user.controller.js";
import { checkAuth } from "../../middlewares/index.js";

export const UserRouter = express.Router();

UserRouter.get("/current-user", checkAuth, UserController.getCurrentUser);