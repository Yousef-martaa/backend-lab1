import express from "express";
import helmet from "helmet";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 3000;

app.use(helmet());
app.disable("x-powered-by");

app.use(express.json());

// auth routes
app.use("/auth", authRoutes);

// main route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// tasks routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});