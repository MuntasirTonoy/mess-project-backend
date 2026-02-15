require("dotenv").config(); // <-- Load .env first
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// --- Load environment variables ---
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is not defined in .env file.");
  process.exit(1);
}

// --- Middleware ---
app.use(cors());
app.use(express.json()); // Built-in alternative to body-parser

// --- Database Connection ---
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully."))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// --- Routes ---
const billRoutes = require("./routes/billRoutes");
app.use("/api/bills", billRoutes);

// --- Root Route ---
app.get("/", (req, res) => {
  res.send("⚡ Utility Bill API is running!");
});

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
