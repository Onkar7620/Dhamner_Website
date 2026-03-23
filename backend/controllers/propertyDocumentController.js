const PropertyDocument = require("../models/PropertyDocument");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createPropertyDocument = async (req, res) => {
  try {
    const { wardNo, address, fullNameEng, fullNameMar, mobile, email, year, village, ownerName, aadhar, propertyNo, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "propertyDocument"
        );
      } catch (uploadError) {
        console.error("Property Document Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const propertyDocument = new PropertyDocument({
      wardNo,
      address,
      fullNameEng,
      fullNameMar,
      mobile,
      email,
      year,
      village,
      ownerName,
      aadhar,
      propertyNo,
      utr,
      screenshot,
    });

    await propertyDocument.save();

    res.status(201).json({
      success: true,
      message: "Property Document submitted successfully ✅",
      data: propertyDocument,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Property Document ❌",
      error: error.message,
    });
  }
};

exports.getAllPropertyDocuments = async (req, res) => {
  try {
    const documents = await PropertyDocument.find();
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

exports.getPropertyDocumentById = async (req, res) => {
  try {
    const document = await PropertyDocument.findById(req.params.id);
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

exports.updatePropertyDocument = async (req, res) => {
  try {
    const document = await PropertyDocument.findByIdAndUpdate(
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

exports.deletePropertyDocument = async (req, res) => {
  try {
    await PropertyDocument.findByIdAndDelete(req.params.id);
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
