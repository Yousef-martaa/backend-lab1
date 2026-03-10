import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// hard-coded user
const user = {
    username: "doe",
    passwordHash: bcrypt.hashSync("doe", 10)
};

router.post("/login", async (req, res) => {

    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).json({ message: "Invalid username" });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);

    if (!validPassword) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { username: user.username },
        "secretkey",
        { expiresIn: "1h" }
    );

    res.json({ token });
});

export default router;