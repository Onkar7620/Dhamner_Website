const mongoose = require("mongoose");

const propertyTransferSchema = new mongoose.Schema(
  {
    sellerName: { type: String, required: true },
    sellerAddress: { type: String, required: true },
    buyerName: { type: String, required: true },
    buyerAddress: { type: String, required: true },
    propertyNo: { type: String, required: true },
    area: { type: String },
    mobile: { type: String, required: true },
    email: { type: String },
    propertyType: {
      type: String,
      enum: ["बखळ  जागा", "कच्चे घर", "अर्धे पक्के घर", "आर सी सी पक्के घर"]
    },
    taxReceipt: { type: String },
    utara: { type: String },
    consent: { type: String },
    deathCertificate: { type: String }, // ✅ ADDED
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyTransfer", propertyTransferSchema);