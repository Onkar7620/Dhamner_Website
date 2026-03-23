const mongoose = require("mongoose");

const marriageCertificateSchema = new mongoose.Schema(
  {
    husbandName: { type: String, required: true },
    wifeName: { type: String, required: true },
    husbandAadhar: { type: String, required: true },
    wifeAadhar: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    year: { type: Number, required: true },
    marriageDate: { type: Date, required: true },
    marriagePlace: { type: String, required: true },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MarriageCertificate", marriageCertificateSchema);
