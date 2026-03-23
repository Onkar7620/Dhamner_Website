const mongoose = require("mongoose");

const ageCertificateSchema = new mongoose.Schema(
  {
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    aadhar: { type: String, required: true },
    year: { type: Number, required: true },
    village: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    dob: { type: Date, required: true },
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AgeCertificate", ageCertificateSchema);
