const MarriageCertificate = require("../models/MarriageCertificate");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createMarriageCertificate = async (req, res) => {
  try {
    const { husbandName, wifeName, husbandAadhar, wifeAadhar, fullNameEng, fullNameMar, mobile, email, year, marriageDate, marriagePlace, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "marriageCertificate"
        );
      } catch (uploadError) {
        console.error("Marriage Certificate Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const marriageCertificate = new MarriageCertificate({
      husbandName,
      wifeName,
      husbandAadhar,
      wifeAadhar,
      fullNameEng,
      fullNameMar,
      mobile,
      email,
      year,
      marriageDate,
      marriagePlace,
      utr,
      screenshot,
    });

    await marriageCertificate.save();

    res.status(201).json({
      success: true,
      message: "Marriage Certificate submitted successfully ✅",
      data: marriageCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Marriage Certificate ❌",
      error: error.message,
    });
  }
};

exports.getAllMarriageCertificates = async (req, res) => {
  try {
    const certificates = await MarriageCertificate.find();
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

exports.getMarriageCertificateById = async (req, res) => {
  try {
    const certificate = await MarriageCertificate.findById(req.params.id);
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

exports.updateMarriageCertificate = async (req, res) => {
  try {
    const certificate = await MarriageCertificate.findByIdAndUpdate(
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

exports.deleteMarriageCertificate = async (req, res) => {
  try {
    await MarriageCertificate.findByIdAndDelete(req.params.id);
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
