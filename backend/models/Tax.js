const mongoose = require("mongoose");

const taxSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    whatsapp: { type: String, required: true },
    email: { type: String },
    receiptNo: { type: String, required: true },
    gharpattiAmount: { type: Number, required: true },
    panipattiAmount: { type: Number, required: true },
    gharpattiUpi: { type: String, required: true },
    panipattiUpi: { type: String, required: true },
    gharpattiScreenshot: { type: String }, // Cloudinary URL
    panipattiScreenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "verified", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tax", taxSchema);
