const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({
      success: true,
      message: "तक्रार यशस्वीरित्या पाठवली ✅",
      data: complaint,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "काहीतरी चूक झाली",
      error: error.message,
    });
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json({
      success: true,
      data: complaints,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "तक्रार सापडली नाही",
      });
    }
    res.status(200).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "तक्रार अपडेट झाली",
      data: complaint,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "तक्रार हटविली",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
