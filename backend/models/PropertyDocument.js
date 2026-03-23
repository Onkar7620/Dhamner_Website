const mongoose = require("mongoose");

const propertyDocumentSchema = new mongoose.Schema(
  {
    wardNo: { type: String },
    address: { type: String, required: true },
    fullNameEng: { type: String, required: true },
    fullNameMar: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    year: { type: Number, required: true },
    village: { type: String, required: true },
    ownerName: { type: String, required: true },
    aadhar: { type: String, required: true },
    propertyNo: { type: String, required: true },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyDocument", propertyDocumentSchema);
