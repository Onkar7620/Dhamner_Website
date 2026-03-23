const Tax = require("../models/Tax");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createTax = async (req, res) => {
  try {
    const { name, whatsapp, email, receiptNo, gharpattiAmount, panipattiAmount, gharpattiUpi, panipattiUpi } = req.body;

    let gharpattiScreenshot = null;
    let panipattiScreenshot = null;

    // Upload Gharparti screenshot
    if (req.files?.gharpattiScreenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.gharpattiScreenshot);
        gharpattiScreenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.gharpattiScreenshot.name,
          "tax"
        );
      } catch (uploadError) {
        console.error("Gharpattiscreenshot Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Gharpattiscreen file ❌",
          error: uploadError.message,
        });
      }
    }

    // Upload Panipatti screenshot
    if (req.files?.panipattiScreenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.panipattiScreenshot);
        panipattiScreenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.panipattiScreenshot.name,
          "tax"
        );
      } catch (uploadError) {
        console.error("Panipatti Screenshot Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading Panipatti screen file ❌",
          error: uploadError.message,
        });
      }
    }

    const tax = new Tax({
      name,
      whatsapp,
      email,
      receiptNo,
      gharpattiAmount,
      panipattiAmount,
      gharpattiUpi,
      panipattiUpi,
      gharpattiScreenshot,
      panipattiScreenshot,
    });

    await tax.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully ✅",
      data: tax,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting form ❌",
      error: error.message,
    });
  }
};

exports.getAllTaxForms = async (req, res) => {
  try {
    const taxes = await Tax.find();
    res.status(200).json({
      success: true,
      data: taxes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getTaxById = async (req, res) => {
  try {
    const tax = await Tax.findById(req.params.id);
    if (!tax) {
      return res.status(404).json({
        success: false,
        message: "Tax form not found",
      });
    }
    res.status(200).json({
      success: true,
      data: tax,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateTax = async (req, res) => {
  try {
    const tax = await Tax.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Tax form updated",
      data: tax,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteTax = async (req, res) => {
  try {
    await Tax.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Tax form deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
