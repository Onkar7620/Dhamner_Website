const mongoose = require("mongoose");

const noDuesSchema = new mongoose.Schema(
  {
    propertyNo: { type: String, required: true },
    wardNo: { type: String },
    address: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    year: { type: Number, required: true },
    ownerName: { type: String, required: true },
    aadhar: { type: String, required: true },
    village: { type: String, required: true },
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NoDues", noDuesSchema);
