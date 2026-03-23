const express = require("express");
const router = express.Router();

const residenceController = require("../controllers/residenceCertificateController");
const { verifyToken } = require("../middleware/authMiddleware");


router.post("/",verifyToken, residenceController.createResidenceCertificate);
router.get("/",verifyToken, residenceController.getAllResidenceCertificates);
router.get("/:id",verifyToken, residenceController.getResidenceCertificateById);
router.put("/:id",verifyToken, residenceController.updateResidenceCertificate);
router.delete("/:id",verifyToken, residenceController.deleteResidenceCertificate);

module.exports = router;
