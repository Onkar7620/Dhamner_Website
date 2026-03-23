const mongoose = require("mongoose");

const deathCertificateSchema = new mongoose.Schema(
  {
    deathDate: { type: Date, required: true },
    deathTime: { type: String },
    deathReason: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    year: { type: Number, required: true },
    deceasedName: { type: String, required: true },
    aadhar: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeathCertificate", deathCertificateSchema);
