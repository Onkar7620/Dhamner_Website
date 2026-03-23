const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessLicenseController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, businessController.createBusinessLicense);
router.get("/",verifyToken, businessController.getAllBusinessLicenses);
router.get("/:id",verifyToken, businessController.getBusinessLicenseById);
router.put("/:id",verifyToken, businessController.updateBusinessLicense);
router.delete("/:id",verifyToken, businessController.deleteBusinessLicense);

module.exports = router;
