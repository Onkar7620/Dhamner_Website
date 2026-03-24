const express = require("express");
const router = express.Router();

const birthController = require("../controllers/birthCertificateController");
const { verifyToken } = require("../middleware/authMiddleware");

// 🔐 PROTECTED ROUTES
router.get("/", verifyToken, birthController.getAllBirthCertificates);
router.delete("/:id", verifyToken, birthController.deleteBirthCertificate);

// 🌍 PUBLIC ROUTE
router.post("/", birthController.createBirthCertificate);

module.exports = router;
