const BirthCertificate = require("../models/BirthCertificate");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createBirthCertificate = async (req, res) => {
  try {
    const { aaiName, fullNameEng, fullNameMar, mobile, email, address, year, childName, dob, time, fatherName, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "birthCertificate"
        );
      } catch (uploadError) {
        console.error("Birth Certificate Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const birthCertificate = new BirthCertificate({
      aaiName,
      fullNameEng,
      fullNameMar,
      mobile,
      email,
      address,
      year,
      childName,
      dob,
      time,
      fatherName,
      utr,
      screenshot,
    });

    await birthCertificate.save();

    res.status(201).json({
      success: true,
      message: "Birth Certificate submitted successfully ✅",
      data: birthCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Birth Certificate ❌",
      error: error.message,
    });
  }
};

exports.getAllBirthCertificates = async (req, res) => {
  try {
    const certificates = await BirthCertificate.find();
    res.status(200).json({
      success: true,
      data: certificates,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBirthCertificateById = async (req, res) => {
  try {
    const certificate = await BirthCertificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }
    res.status(200).json({
      success: true,
      data: certificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateBirthCertificate = async (req, res) => {
  try {
    const certificate = await BirthCertificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Certificate updated",
      data: certificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteBirthCertificate = async (req, res) => {
  try {
    await BirthCertificate.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Certificate deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
