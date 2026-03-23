const mongoose = require("mongoose");

const land712Schema = new mongoose.Schema(
  {
    surveyNo: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    ownerName: { type: String, required: true },
    village: { type: String, required: true },
    taluka: { type: String },
    district: { type: String },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Land712", land712Schema);
