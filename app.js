import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// main route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// tasks routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});