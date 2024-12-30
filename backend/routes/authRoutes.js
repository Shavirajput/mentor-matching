const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser } = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password, role, skills, bio } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await createUser({
            name,
            email,
            password: hashedPassword,
            role,
            skills,
            bio,
        });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: "User registration failed" });
    }
});

module.exports = router;
