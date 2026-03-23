const AgeCertificate = require("../models/AgeCertificate");

exports.createAgeCertificate = async (req, res) => {
  try {
    const ageCertificate = new AgeCertificate(req.body);
    await ageCertificate.save();
    res.status(201).json({
      success: true,
      message: "Age Certificate submitted successfully ✅",
      data: ageCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Age Certificate ❌",
      error: error.message,
    });
  }
};

exports.getAllAgeCertificates = async (req, res) => {
  try {
    const certificates = await AgeCertificate.find();
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

exports.getAgeCertificateById = async (req, res) => {
  try {
    const certificate = await AgeCertificate.findById(req.params.id);
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

exports.updateAgeCertificate = async (req, res) => {
  try {
    const certificate = await AgeCertificate.findByIdAndUpdate(
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

exports.deleteAgeCertificate = async (req, res) => {
  try {
    await AgeCertificate.findByIdAndDelete(req.params.id);
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
