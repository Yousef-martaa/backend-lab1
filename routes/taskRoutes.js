import express from "express";
import {
    getAllTasksController,
    getTaskByIdController,
    createTaskController,
    updateTaskController,
    deleteTaskController
} from "../controllers/taskController.js";
import { verifyAPIKey } from "../middleware/verifyAPIKey.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/", getAllTasksController);

router.get("/protected", verifyAPIKey, (req, res) => {
    res.json({ message: "Access granted. Valid API Key." });
});

router.get("/jwt-protected", verifyJWT, (req, res) => {
    res.json({ message: "JWT access granted", user: req.user });
});

router.get("/:id", getTaskByIdController);

router.post("/", createTaskController);

router.put("/:id", updateTaskController);

router.delete("/:id", deleteTaskController);


export default router;