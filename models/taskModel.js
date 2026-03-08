import pool from "../config/db.js";

// Get all tasks
export const getAllTasks = async () => {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return rows;
};

// Get task by id
export const getTaskById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0];
};

// Create task
export const createTask = async (title) => {
    const [result] = await pool.query(
        "INSERT INTO tasks (title) VALUES (?)",
        [title]
    );
    return result;
};

// Update task
export const updateTask = async (id, title, completed) => {
    const [result] = await pool.query(
        "UPDATE tasks SET title = ?, completed = ? WHERE id = ?",
        [title, completed, id]
    );
    return result;
};

// Delete task
export const deleteTask = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );
    return result;
};