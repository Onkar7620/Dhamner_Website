

const express = require("express");
const router = express.Router();
const birthController = require("../controllers/birthCertificateController");

// ✅ ADD THIS LINE
const { verifyToken } = require("../middleware/authMiddleware");

// 🔥 PROTECTED ROUTES
router.get("/", verifyToken, birthController.getAllBirthCertificates);
router.delete("/:id", verifyToken, birthController.deleteBirthCertificate);

// optional protect update also
router.put("/:id", verifyToken, birthController.updateBirthCertificate);

router.post("/", birthController.createBirthCertificate); // public

module.exports = router;