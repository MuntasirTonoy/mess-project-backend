const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // To allow communication from the Next.js app

const app = express();
const PORT = 5000; // API will run on port 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const MONGODB_URI =
  "mongodb+srv://tonoymess:1234tonoy@multicluster.gdgmdw.mongodb.net/?retryWrites=true&w=majority&appName=MultiCluster";
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const billRoutes = require("./routes/billRoutes");
app.use("/api/bills", billRoutes);

app.get("/", (req, res) => {
  res.send("Utility Bill API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
