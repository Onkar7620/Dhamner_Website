const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    const contact = new Contact({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "संपर्क संदेश पाठवला गेला ✅",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "त्रुटी आली ❌",
      error: error.message,
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "संपर्क सापडला नाही",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "संपर्क अपडेट झाला",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "संपर्क हटविला",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
