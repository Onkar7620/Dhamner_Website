const NoDues = require("../models/NoDues");

exports.createNoDues = async (req, res) => {
  try {
    const noDues = new NoDues(req.body);
    await noDues.save();
    res.status(201).json({
      success: true,
      message: "No Dues Certificate submitted successfully ✅",
      data: noDues,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting No Dues ❌",
      error: error.message,
    });
  }
};

exports.getAllNoDues = async (req, res) => {
  try {
    const documents = await NoDues.find();
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

exports.getNoDuesById = async (req, res) => {
  try {
    const document = await NoDues.findById(req.params.id);
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

exports.updateNoDues = async (req, res) => {
  try {
    const document = await NoDues.findByIdAndUpdate(
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

exports.deleteNoDues = async (req, res) => {
  try {
    await NoDues.findByIdAndDelete(req.params.id);
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
