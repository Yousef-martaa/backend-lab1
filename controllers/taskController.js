import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "../models/taskModel.js";

// GET all tasks
export const getAllTasksController = async (req, res) => {
    const tasks = await getAllTasks();
    res.json(tasks);
};

// GET task by id
export const getTaskByIdController = async (req, res) => {
    const task = await getTaskById(req.params.id);
    res.json(task);
};

// CREATE task
export const createTaskController = async (req, res) => {
    const { title } = req.body;
    const result = await createTask(title);
    res.json(result);
};

// UPDATE task
export const updateTaskController = async (req, res) => {
    const { title, completed } = req.body;
    const result = await updateTask(req.params.id, title, completed);
    res.json(result);
};

// DELETE task
export const deleteTaskController = async (req, res) => {
    const result = await deleteTask(req.params.id);
    res.json(result);
};