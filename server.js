require("dotenv").config(); // <-- Load .env first
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// --- Load environment variables ---
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());

// --- Database Connection ---
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Routes ---
const billRoutes = require("./routes/billRoutes");
app.use("/api/bills", billRoutes);

// --- Root Route ---
app.get("/", (req, res) => {
  res.send("⚡ Utility Bill API is running!");
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
