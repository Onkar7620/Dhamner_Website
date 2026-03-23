const PropertyTransfer = require("../models/PropertyTransfer");
const uploadToCloudinary = require("../middleware/cloudinaryUpload");
const { getFileBuffer } = require("../middleware/fileHandler");

// ✅ CREATE
exports.createPropertyTransfer = async (req, res) => {
  try {
    const {
      sellerName,
      sellerAddress,
      buyerName,
      buyerAddress,
      propertyNo,
      area,
      mobile,
      email,
      propertyType,
    } = req.body;

    let taxReceipt = null;
    let utara = null;
    let consent = null;
    let deathCertificate = null;

    if (req.files?.taxReceipt) {
      const fileBuffer = await getFileBuffer(req.files.taxReceipt);
      taxReceipt = await uploadToCloudinary(
        fileBuffer,
        req.files.taxReceipt.name,
        "propertyTransfer"
      );
    }

    if (req.files?.utara) {
      const fileBuffer = await getFileBuffer(req.files.utara);
      utara = await uploadToCloudinary(
        fileBuffer,
        req.files.utara.name,
        "propertyTransfer"
      );
    }

    if (req.files?.consent) {
      const fileBuffer = await getFileBuffer(req.files.consent);
      consent = await uploadToCloudinary(
        fileBuffer,
        req.files.consent.name,
        "propertyTransfer"
      );
    }

    if (req.files?.deathCertificate) {
      const fileBuffer = await getFileBuffer(req.files.deathCertificate);
      deathCertificate = await uploadToCloudinary(
        fileBuffer,
        req.files.deathCertificate.name,
        "propertyTransfer"
      );
    }

    const propertyTransfer = new PropertyTransfer({
      sellerName,
      sellerAddress,
      buyerName,
      buyerAddress,
      propertyNo,
      area,
      mobile,
      email,
      propertyType,
      taxReceipt,
      utara,
      consent,
      deathCertificate,
    });

    await propertyTransfer.save();

    res.status(201).json({
      success: true,
      message: "Property Transfer submitted successfully",
      data: propertyTransfer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Property Transfer",
      error: error.message,
    });
  }
};

// ✅ GET ALL
exports.getAllPropertyTransfers = async (req, res) => {
  try {
    const data = await PropertyTransfer.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ✅ GET BY ID
exports.getPropertyTransferById = async (req, res) => {
  try {
    const data = await PropertyTransfer.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ✅ UPDATE
exports.updatePropertyTransfer = async (req, res) => {
  try {
    const data = await PropertyTransfer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ✅ DELETE
exports.deletePropertyTransfer = async (req, res) => {
  try {
    await PropertyTransfer.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};