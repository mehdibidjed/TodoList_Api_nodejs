import { Router } from "express";
import TaskController from './../controllers/TaskController.js'

const router=Router()
router.post('/addTask',TaskController.addTask);
router.delete('/removeTask/:id',TaskController.deleteTask);
router.get('/getTasks',TaskController.getTasks);
router.put('/modifyTask',TaskController.modifyTask)
export default router ; 