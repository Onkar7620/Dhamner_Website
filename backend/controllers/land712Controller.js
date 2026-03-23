const Land712 = require("../models/Land712");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

exports.createLand712 = async (req, res) => {
  try {
    const { surveyNo, mobile, email, ownerName, village, taluka, district, utr } = req.body;

    // Validate required fields
    if (!surveyNo || !surveyNo.trim()) {
      return res.status(400).json({
        success: false,
        message: "सर्वे नंबर भरणे आवश्यक आहे",
        error: "Survey number is required",
      });
    }
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({
        success: false,
        message: "मोबाईल नंबर भरणे आवश्यक आहे",
        error: "Mobile number is required",
      });
    }
    if (!ownerName || !ownerName.trim()) {
      return res.status(400).json({
        success: false,
        message: "मालकांचे नाव भरणे आवश्यक आहे",
        error: "Owner name is required",
      });
    }
    if (!village || !village.trim()) {
      return res.status(400).json({
        success: false,
        message: "गावाचे नाव भरणे आवश्यक आहे",
        error: "Village name is required",
      });
    }

    let screenshot = null;
    if (req.files?.screenshot) {
      const file = req.files.screenshot;
      
      try {
        const fileBuffer = await getFileBuffer(file);
        screenshot = await uploadToCloudinary(
          fileBuffer,
          file.name,
          "land712"
        );
      } catch (uploadError) {
        console.error("Land712 Upload Error:", uploadError);
        return res.status(400).json({
          success: false,
          message: "फाईल अपलोड अयोग्य आहे",
          error: uploadError.message,
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "स्क्रीनशॉट अपलोड करणे आवश्यक आहे",
        error: "Screenshot file is required",
      });
    }

    const land712 = new Land712({
      surveyNo: surveyNo.trim(),
      mobile: mobile.trim(),
      email: email?.trim() || "",
      ownerName: ownerName.trim(),
      village: village.trim(),
      taluka: taluka?.trim() || "",
      district: district?.trim() || "",
      utr: utr?.trim() || "",
      screenshot,
    });

    await land712.save();

    res.status(201).json({
      success: true,
      message: "Land 7/12 submitted successfully ✅",
      data: land712,
    });
  } catch (error) {
    console.error("Land712 Error:", error);
    res.status(400).json({
      success: false,
      message: "Error submitting Land 7/12 ❌",
      error: error.message,
    });
  }
};

exports.getAllLand712 = async (req, res) => {
  try {
    const documents = await Land712.find();
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

exports.getLand712ById = async (req, res) => {
  try {
    const document = await Land712.findById(req.params.id);
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

exports.updateLand712 = async (req, res) => {
  try {
    const document = await Land712.findByIdAndUpdate(
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

exports.deleteLand712 = async (req, res) => {
  try {
    await Land712.findByIdAndDelete(req.params.id);
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
