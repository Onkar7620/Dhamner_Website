const PropertyCard = require("../models/PropertyCard");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createPropertyCard = async (req, res) => {
  try {
    const { ctsNo, ulpin, ownerName, village, taluka, district, mobile, email, utr } = req.body;

    let screenshot = null;
    if (req.files?.screenshot) {
      try {
        const fileBuffer = await getFileBuffer(req.files.screenshot);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          req.files.screenshot.name,
          "propertyCard"
        );
      } catch (uploadError) {
        console.error("Property Card Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "Error uploading file ❌",
          error: uploadError.message,
        });
      }
    }

    const propertyCard = new PropertyCard({
      ctsNo,
      ulpin,
      ownerName,
      village,
      taluka,
      district,
      mobile,
      email,
      utr,
      screenshot,
    });

    await propertyCard.save();

    res.status(201).json({
      success: true,
      message: "Property Card submitted successfully ✅",
      data: propertyCard,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Property Card ❌",
      error: error.message,
    });
  }
};

exports.getAllPropertyCards = async (req, res) => {
  try {
    const cards = await PropertyCard.find();
    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getPropertyCardById = async (req, res) => {
  try {
    const card = await PropertyCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }
    res.status(200).json({
      success: true,
      data: card,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updatePropertyCard = async (req, res) => {
  try {
    const card = await PropertyCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Card updated",
      data: card,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deletePropertyCard = async (req, res) => {
  try {
    await PropertyCard.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Card deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
