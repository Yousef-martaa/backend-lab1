# Task Manager Project (Lab 1, Lab 2, Lab 3)

This project is a simple backend server built with Node.js, Express, MySQL, and EJS.  
It was developed step by step through three labs in the Backend Development course.

The project started as a REST API, and in Lab 3 it was extended with web pages using EJS.

---

# Technologies

- Node.js
- Express.js
- MySQL
- EJS
- Helmet
- express-session
- connect-flash

---

# Project Structure

```
project/
│
├── app.js
├── package.json
├── README.md
│
├── config/
│   └── db.js
│
├── controllers/
│   └── taskController.js
│
├── middleware/
│   ├── verifyAPIKey.js
│   └── verifyJWT.js
│
├── models/
│   └── taskModel.js
│
├── routes/
│   ├── taskRoutes.js
│   └── authRoutes.js
│
└── views/
    ├── index.ejs
    ├── friday.ejs
    ├── tasks.ejs
    ├── task.ejs
    ├── newTask.ejs
    └── editTask.ejs
```

---

# Lab 1

Lab 1 builds the basic server.

Features:
- Express server
- MySQL database connection
- MVC structure
- REST API for tasks

API operations:
- Get all tasks
- Get task by id
- Create task
- Update task
- Delete task

---

# Lab 2

Lab 2 extends the API with more structure and security.

Features:
- Better route structure
- Middleware support
- API key verification
- Authentication routes
- Security using Helmet

---

# Lab 3

Lab 3 adds web pages using EJS.

Features:
- EJS template engine
- Landing page
- Friday page
- Web CRUD for tasks
- Flash messages

---

# Web Pages

Home page

```
GET /
```

Friday page

```
GET /friday
```

Friday page with test date

```
/friday?date=2026-02-27
```

Show all tasks

```
GET /tasks
```

Create task page

```
GET /tasks/new
```

View task

```
GET /tasks/:id
```

Edit task

```
GET /tasks/edit/:id
```

Update task

```
POST /tasks/update/:id
```

Delete task

```
GET /tasks/delete/:id
```

---

# API Routes

Get all tasks

```
GET /tasks
```

Get one task

```
GET /tasks/:id
```

Create task

```
POST /tasks
```

Update task

```
PUT /tasks/:id
```

Delete task

```
DELETE /tasks/:id
```

---

# Database

Example table:

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed TINYINT(1) DEFAULT 0
);
```

---

# Installation

Clone the repository

```
git clone <repo-url>
```

Install dependencies

```
npm install
```

Install extra packages for Lab 3

```
npm install ejs express-session connect-flash
```

Start the server

```
node app.js
```

Open the server in browser

```
http://localhost:3000
```

---

# Purpose of the Project

The goal of this project is to practice:

- Express server development
- MVC structure
- CRUD operations
- MySQL database integration
- Middleware
- Authentication basics
- EJS templates
- Extending an existing code base

---

# Author

Yousef Martaa