const BuildingPermission = require("../models/BuildingPermission");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createBuildingPermission = async (req, res) => {
  try {
    const { fullName, address, mobile, email, business, propertyNo, plotAreaSqFt, plotAreaSqM, constructionAreaSqFt, constructionAreaSqM, floors } = req.body;

    let ownershipDocs = null;
    let layoutPlan = null;
    let buildingPlan = null;
    let taxReceipt = null;

    if (req.files?.ownershipDocs) {
      try {
        const fileBuffer = await getFileBuffer(req.files.ownershipDocs);
        ownershipDocs = await uploadToCloudinary(
          fileBuffer,
          req.files.ownershipDocs.name,
          "buildingPermission"
        );
      } catch (uploadError) {
        console.error("Ownership Docs Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Ownership Documents ❌",
          error: uploadError.message,
        });
      }
    }

    if (req.files?.layoutPlan) {
      try {
        const fileBuffer = await getFileBuffer(req.files.layoutPlan);
        layoutPlan = await uploadToCloudinary(
          fileBuffer,
          req.files.layoutPlan.name,
          "buildingPermission"
        );
      } catch (uploadError) {
        console.error("Layout Plan Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Layout Plan ❌",
          error: uploadError.message,
        });
      }
    }

    if (req.files?.buildingPlan) {
      try {
        const fileBuffer = await getFileBuffer(req.files.buildingPlan);
        buildingPlan = await uploadToCloudinary(
          fileBuffer,
          req.files.buildingPlan.name,
          "buildingPermission"
        );
      } catch (uploadError) {
        console.error("Building Plan Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Building Plan ❌",
          error: uploadError.message,
        });
      }
    }

    if (req.files?.taxReceipt) {
      try {
        const fileBuffer = await getFileBuffer(req.files.taxReceipt);
        taxReceipt = await uploadToCloudinary(
          fileBuffer,
          req.files.taxReceipt.name,
          "buildingPermission"
        );
      } catch (uploadError) {
        console.error("Tax Receipt Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Tax Receipt ❌",
          error: uploadError.message,
        });
      }
    }

    const buildingPermission = new BuildingPermission({
      fullName,
      address,
      mobile,
      email,
      business,
      propertyNo,
      plotAreaSqFt,
      plotAreaSqM,
      constructionAreaSqFt,
      constructionAreaSqM,
      floors,
      ownershipDocs,
      layoutPlan,
      buildingPlan,
      taxReceipt,
    });

    await buildingPermission.save();

    res.status(201).json({
      success: true,
      message: "Building Permission submitted successfully ✅",
      data: buildingPermission,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Building Permission ❌",
      error: error.message,
    });
  }
};

exports.getAllBuildingPermissions = async (req, res) => {
  try {
    const permissions = await BuildingPermission.find();
    res.status(200).json({
      success: true,
      data: permissions,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBuildingPermissionById = async (req, res) => {
  try {
    const permission = await BuildingPermission.findById(req.params.id);
    if (!permission) {
      return res.status(404).json({
        success: false,
        message: "Permission not found",
      });
    }
    res.status(200).json({
      success: true,
      data: permission,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateBuildingPermission = async (req, res) => {
  try {
    const permission = await BuildingPermission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Permission updated",
      data: permission,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteBuildingPermission = async (req, res) => {
  try {
    await BuildingPermission.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Permission deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
