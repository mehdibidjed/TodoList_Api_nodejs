import { Router } from "express";
import authController from "../controllers/authController.js";

const authrouter = Router();
/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: API for login
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *        - Authentication
 *     summary: Create a new user 
 *     description: Crée un utilisateur avec un nom d'utilisateur et un mot de passe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "testuser"
 *               password:
 *                 type: string
 *                 example: "mypassword"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur lors de l'inscription
 */
authrouter.post("/register", authController.register);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *        - Authentication
 *     summary: login of a user
 *     description: verification the user info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "testuser"
 *               password:
 *                 type: string
 *                 example: "mypassword"
 *     responses:
 *       200:
 *         description:new connection is created
 *       401:
 *         description: Wrong password
 *       404:
 *         description: User not found
 */
authrouter.post("/login", authController.login);
export default authrouter;
