const express = require("express");
const router = express.Router();
const Bill = require("../models/Bill");

// POST /api/bills - Save a new bill
router.post("/", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/bills - Get all bills (for the dashboard)
router.get("/", async (req, res) => {
  try {
    const bills = await Bill.find().sort({ issueTime: -1 }); // Latest first
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// DELETE /api/bills/:id - Delete a bill by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBill = await Bill.findByIdAndDelete(req.params.id);

    if (!deletedBill) {
      return res.status(404).json({ message: "Bill not found" });
    }

    res.json({ message: "Bill deleted successfully" });
  } catch (err) {
    // Check if the ID format is invalid
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid Bill ID format" });
    }
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
