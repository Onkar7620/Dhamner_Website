const DeathCertificate = require("../models/DeathCertificate");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createDeathCertificate = async (req, res) => {
  try {
    const { deathDate, deathTime, deathReason, fullNameEng, fullNameMar, year, deceasedName, aadhar, address, mobile, email, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "deathCertificate"
        );
      } catch (uploadError) {
        console.error("Death Certificate Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const deathCertificate = new DeathCertificate({
      deathDate,
      deathTime,
      deathReason,
      fullNameEng,
      fullNameMar,
      year,
      deceasedName,
      aadhar,
      address,
      mobile,
      email,
      utr,
      screenshot,
    });

    await deathCertificate.save();

    res.status(201).json({
      success: true,
      message: "Death Certificate submitted successfully ✅",
      data: deathCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Death Certificate ❌",
      error: error.message,
    });
  }
};

exports.getAllDeathCertificates = async (req, res) => {
  try {
    const certificates = await DeathCertificate.find();
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

exports.getDeathCertificateById = async (req, res) => {
  try {
    const certificate = await DeathCertificate.findById(req.params.id);
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

exports.updateDeathCertificate = async (req, res) => {
  try {
    const certificate = await DeathCertificate.findByIdAndUpdate(
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

exports.deleteDeathCertificate = async (req, res) => {
  try {
    await DeathCertificate.findByIdAndDelete(req.params.id);
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
