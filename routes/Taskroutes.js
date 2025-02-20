import { Router } from "express";
import TaskController from "./../controllers/TaskController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Tasks
 *     description: API for managing tasks
 */

/**
 * @swagger
 * /api/tasks/addTask:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Add a new task
 *     operationId: addTask
 *     description: Creates a new task with details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Buy groceries"
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-02-17T12:00:00Z"
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post("/addTask", authMiddleware, TaskController.addTask);

/**
 * @swagger
 * /api/tasks/removeTask/{id}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: Delete a task
 *     operationId: removeTask
 *     description: Deletes a task by its ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete("/removeTask/:id", authMiddleware, TaskController.deleteTask);

/**
 * @swagger
 * /api/tasks/getTasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Retrieve all tasks
 *     operationId: getTasks
 *     description: Fetches a list of all tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of tasks
 */
router.get("/getTasks", authMiddleware, TaskController.getTasks);

/**
 * @swagger
 * /api/tasks/modifyTask:
 *   put:
 *     tags:
 *       - Tasks
 *     summary: Modify a task
 *     operationId: modifyTask
 *     description: Updates specific fields of a task
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Buy groceries"
 *               newTitle:
 *                 type: string
 *                 example: "Buy groceries and go to the post office"
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.put("/modifyTask", authMiddleware, TaskController.modifyTask);

export default router;
