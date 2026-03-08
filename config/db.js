import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Yousef@123",
    database: "lab1",
    waitForConnections: true,
    connectionLimit: 10
});

export default pool;