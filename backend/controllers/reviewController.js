const Review = require("../models/Review");

exports.createReview = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    const review = new Review({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    await review.save();

    res.status(201).json({
      success: true,
      message: "आपली मते पाठवली गेली ✅",
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "त्रुटी आली ❌",
      error: error.message,
    });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({
        success: false,
        message: "मत सापडली नाही",
      });
    }
    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "मत अपडेट झाली",
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "मत हटविली",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
