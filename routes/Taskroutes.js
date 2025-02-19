import { Router } from "express";
import TaskController from "./../controllers/TaskController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/addTask", authMiddleware, TaskController.addTask);

router.delete("/removeTask/:id", authMiddleware, TaskController.deleteTask);

router.get("/getTasks", authMiddleware, TaskController.getTasks);

router.put("/modifyTask", authMiddleware, TaskController.modifyTask);

export default router;
