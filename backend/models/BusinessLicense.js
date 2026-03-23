const mongoose = require("mongoose");

const businessLicenseSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    ownerAddress: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    businessType: { type: String, required: true },
    businessCategory: { type: String, required: true },
    district: { type: String, required: true },
    pincode: { type: String, required: true },
    startDate: { type: Date, required: true },
    businessNature: { type: String, required: true },
    male: { type: Number },
    female: { type: Number },
    other: { type: Number },
    total: { type: Number },
    businessAddress: { type: String, required: true },
    buildingName: { type: String },
    road: { type: String },
    landmark: { type: String },
    village: { type: String, required: true },
    taluka: { type: String },
    aadhar: { type: String }, // Cloudinary URL
    photo: { type: String }, // Cloudinary URL
    payment: { type: String }, // Cloudinary URL
    utr: { type: String },
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusinessLicense", businessLicenseSchema);
