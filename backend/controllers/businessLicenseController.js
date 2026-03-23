const BusinessLicense = require("../models/BusinessLicense");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createBusinessLicense = async (req, res) => {
  try {
    const { ownerName, ownerAddress, mobile, email, businessType, businessCategory, district, pincode, startDate, businessNature, male, female, other, total, businessAddress, buildingName, road, landmark, village, taluka, utr } = req.body;

    let aadhar = null;
    let photo = null;
    let payment = null;

    if (req.files?.aadhar) {
      try {
        const fileBuffer = await getFileBuffer(req.files.aadhar);
        aadhar = await uploadToCloudinary(
          fileBuffer,
          req.files.aadhar.name,
          "businessLicense"
        );
      } catch (uploadError) {
        console.error("Aadhar Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Aadhar ❌",
          error: uploadError.message,
        });
      }
    }

    if (req.files?.photo) {
      try {
        const fileBuffer = await getFileBuffer(req.files.photo);
        photo = await uploadToCloudinary(
          fileBuffer,
          req.files.photo.name,
          "businessLicense"
        );
      } catch (uploadError) {
        console.error("Photo Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Photo ❌",
          error: uploadError.message,
        });
      }
    }

    if (req.files?.payment) {
      try {
        const fileBuffer = await getFileBuffer(req.files.payment);
        payment = await uploadToCloudinary(
          fileBuffer,
          req.files.payment.name,
          "businessLicense"
        );
      } catch (uploadError) {
        console.error("Payment Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Payment ❌",
          error: uploadError.message,
        });
      }
    }

    const businessLicense = new BusinessLicense({
      ownerName,
      ownerAddress,
      mobile,
      email,
      businessType,
      businessCategory,
      district,
      pincode,
      startDate,
      businessNature,
      male,
      female,
      other,
      total,
      businessAddress,
      buildingName,
      road,
      landmark,
      village,
      taluka,
      aadhar,
      photo,
      payment,
      utr,
    });

    await businessLicense.save();

    res.status(201).json({
      success: true,
      message: "Business License submitted successfully ✅",
      data: businessLicense,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Business License ❌",
      error: error.message,
    });
  }
};

exports.getAllBusinessLicenses = async (req, res) => {
  try {
    const licenses = await BusinessLicense.find();
    res.status(200).json({
      success: true,
      data: licenses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBusinessLicenseById = async (req, res) => {
  try {
    const license = await BusinessLicense.findById(req.params.id);
    if (!license) {
      return res.status(404).json({
        success: false,
        message: "License not found",
      });
    }
    res.status(200).json({
      success: true,
      data: license,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateBusinessLicense = async (req, res) => {
  try {
    const license = await BusinessLicense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "License updated",
      data: license,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteBusinessLicense = async (req, res) => {
  try {
    await BusinessLicense.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "License deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
