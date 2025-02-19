import { Router } from "express";
import authController from "../controllers/authController.js";

const authrouter = Router();
authrouter.post("/register", authController.register);
authrouter.post("/login", authController.login);
export default authrouter;
