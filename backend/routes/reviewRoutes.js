const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, reviewController.createReview);
router.get("/",verifyToken, reviewController.getAllReviews);
router.get("/:id",verifyToken, reviewController.getReviewById);
router.put("/:id",verifyToken, reviewController.updateReview);
router.delete("/:id",verifyToken, reviewController.deleteReview);

module.exports = router;
