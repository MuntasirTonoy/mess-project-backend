const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  issueTime: {
    type: Date,
    default: Date.now,
  },
  madeBy: {
    type: String,
    required: true,
  },
  totalMembers: {
    type: Number,
    required: true,
  },
  billDetails: {
    type: [
      {
        utility: String, // e.g., 'wifi', 'electric bill'
        totalAmount: Number,
        sources: [
          {
            meterName: String, // e.g., 'Meter 1', 'Source 1'
            amount: Number,
          },
        ],
      },
    ],
    required: true,
  },
  totalBill: {
    type: Number,
    required: true,
  },
  billPerPerson: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bill", BillSchema);
