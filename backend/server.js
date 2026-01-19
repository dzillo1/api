require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");

const app = express();

/* Middleware */
app.use(cors({ origin: "http://localhost:3000", allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());

/* Routes */
app.get("/", (req, res) => res.send("Server responding"));
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

/* Start server */
const PORT = 5000;
app.listen(PORT, "127.0.0.1", () => console.log(`Server running on port ${PORT}`));
