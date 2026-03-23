const mongoose = require("mongoose");

const residenceCertificateSchema = new mongoose.Schema(
  {
    malmattaNo: { type: String, required: true },
    wardNo: { type: String },
    street: { type: String },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    aadhar: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    year: { type: Number, required: true },
    address: { type: String, required: true },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResidenceCertificate", residenceCertificateSchema);
