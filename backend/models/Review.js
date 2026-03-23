const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "pending", enum: ["pending", "reviewed", "archived"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
