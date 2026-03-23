const ResidenceCertificate = require("../models/ResidenceCertificate");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createResidenceCertificate = async (req, res) => {
  try {
    const { malmattaNo, wardNo, street, fullNameEng, fullNameMar, aadhar, mobile, email, year, address, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "residenceCertificate"
        );
      } catch (uploadError) {
        console.error("Residence Certificate Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const residenceCertificate = new ResidenceCertificate({
      malmattaNo,
      wardNo,
      street,
      fullNameEng,
      fullNameMar,
      aadhar,
      mobile,
      email,
      year,
      address,
      utr,
      screenshot,
    });

    await residenceCertificate.save();

    res.status(201).json({
      success: true,
      message: "Residence Certificate submitted successfully ✅",
      data: residenceCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Residence Certificate ❌",
      error: error.message,
    });
  }
};

exports.getAllResidenceCertificates = async (req, res) => {
  try {
    const certificates = await ResidenceCertificate.find();
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

exports.getResidenceCertificateById = async (req, res) => {
  try {
    const certificate = await ResidenceCertificate.findById(req.params.id);
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

exports.updateResidenceCertificate = async (req, res) => {
  try {
    const certificate = await ResidenceCertificate.findByIdAndUpdate(
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

exports.deleteResidenceCertificate = async (req, res) => {
  try {
    await ResidenceCertificate.findByIdAndDelete(req.params.id);
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
