import express from "express";
import helmet from "helmet";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from "./models/taskModel.js";
import session from "express-session";
import flash from "connect-flash";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(helmet());
app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// auth routes
app.use("/auth", authRoutes);

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Friday page
app.get("/friday", (req, res) => {

    let date;

    if (req.query.date) {
        date = new Date(req.query.date);
    } else {
        date = new Date();
    }

    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const isFriday = day === "Friday";

    res.render("friday", {
        date: date.toDateString(),
        day: day,
        isFriday: isFriday
    });

});

// Show all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await getAllTasks();
    res.render("tasks", {
        tasks,
        message: req.flash("message")
    });
});

// Create task page
app.get("/tasks/new", (req, res) => {
    res.render("newTask");
});

// Create task
app.post("/tasks/create", async (req, res) => {
    const { title } = req.body;
    await createTask(title);

    req.flash("message", "Task created successfully");

    res.redirect("/tasks");
});

// Edit task page
app.get("/tasks/edit/:id", async (req, res) => {
    const id = req.params.id;
    const task = await getTaskById(id);
    res.render("editTask", { task });
});

// Update task
app.post("/tasks/update/:id", async (req, res) => {
    const id = req.params.id;
    const { title, completed } = req.body;
    await updateTask(id, title, Number(completed));

    req.flash("message", "Task updated");

    res.redirect("/tasks");
});

// View single task
app.get("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const task = await getTaskById(id);
    res.render("task", { task });
});

// Delete task
app.get("/tasks/delete/:id", async (req, res) => {

    const id = req.params.id;

    await deleteTask(id);

    req.flash("message", "Task deleted");

    res.redirect("/tasks");

});

// API routes (Lab1 + Lab2)
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

