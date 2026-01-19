const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Login endpoint
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simple check — hardcoded admin credentials
  if (username === "admin" && password === "password") {
    const token = jwt.sign({ user: username }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
