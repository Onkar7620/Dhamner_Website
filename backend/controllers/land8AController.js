const Land8A = require("../models/Land8A");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createLand8A = async (req, res) => {
  try {
    const { ownerName, village, taluka, district, khataNo, mobile, email, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "land8A"
        );
      } catch (uploadError) {
        console.error("Land 8A Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const land8A = new Land8A({
      ownerName,
      village,
      taluka,
      district,
      khataNo,
      mobile,
      email,
      utr,
      screenshot,
    });

    await land8A.save();

    res.status(201).json({
      success: true,
      message: "Land 8A submitted successfully ✅",
      data: land8A,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Land 8A ❌",
      error: error.message,
    });
  }
};

exports.getAllLand8A = async (req, res) => {
  try {
    const documents = await Land8A.find();
    res.status(200).json({
      success: true,
      data: documents,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getLand8AById = async (req, res) => {
  try {
    const document = await Land8A.findById(req.params.id);
    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }
    res.status(200).json({
      success: true,
      data: document,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateLand8A = async (req, res) => {
  try {
    const document = await Land8A.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Document updated",
      data: document,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteLand8A = async (req, res) => {
  try {
    await Land8A.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Document deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
