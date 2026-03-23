const mongoose = require("mongoose");

const land8ASchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    village: { type: String, required: true },
    taluka: { type: String },
    district: { type: String },
    khataNo: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    utr: { type: String },
    screenshot: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Land8A", land8ASchema);
