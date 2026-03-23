const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    propertyId: { type: String, required: true },
    department: { type: String, enum: ["water", "electricity", "road"], required: true },
    complaint: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    aadhaar: { type: String, required: true },
    status: { type: String, default: "pending", enum: ["pending", "resolved", "in-progress"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
