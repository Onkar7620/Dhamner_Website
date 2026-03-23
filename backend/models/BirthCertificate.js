const mongoose = require("mongoose");

const birthCertificateSchema = new mongoose.Schema(
  {
    aaiName: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    year: { type: Number, required: true },
    childName: { type: String, required: true },
    dob: { type: Date, required: true },
    time: { type: String },
    fatherName: { type: String, required: true },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BirthCertificate", birthCertificateSchema);
