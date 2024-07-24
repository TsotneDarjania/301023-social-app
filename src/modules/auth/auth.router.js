import express from "express";
import AuthController from "./auth.controller.js";
import { RegisterUserDto, LoginUserDto } from "./dto/index.js";

export const AuthRouter = express.Router();

AuthRouter.post("/register", RegisterUserDto, AuthController.registerUser);
AuthRouter.post("/login", LoginUserDto, AuthController.loginUser);
