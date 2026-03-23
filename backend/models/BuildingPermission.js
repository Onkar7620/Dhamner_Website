const mongoose = require("mongoose");

const buildingPermissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    business: { type: String },
    propertyNo: { type: String, required: true },
    plotAreaSqFt: { type: Number },
    plotAreaSqM: { type: Number },
    constructionAreaSqFt: { type: Number },
    constructionAreaSqM: { type: Number },
    floors: { type: Number },
    ownershipDocs: { type: String }, // Cloudinary URL
    layoutPlan: { type: String }, // Cloudinary URL
    buildingPlan: { type: String }, // Cloudinary URL
    taxReceipt: { type: String }, // Cloudinary URL
    status: { type: String, default: "pending", enum: ["pending", "approved", "rejected"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BuildingPermission", buildingPermissionSchema);
