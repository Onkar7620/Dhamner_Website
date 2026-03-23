const mongoose = require("mongoose");

const propertyCardSchema = new mongoose.Schema(
  {
    ctsNo: { type: String, required: true },
    ulpin: { type: String, required: true },
    ownerName: { type: String, required: true },
    village: { type: String, required: true },
    taluka: { type: String },
    district: { type: String },
    mobile: { type: String, required: true },
    email: { type: String },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyCard", propertyCardSchema);
