const express = require("express");
const router = express.Router();
const marriageController = require("../controllers/marriageCertificateController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, marriageController.createMarriageCertificate);
router.get("/",verifyToken, marriageController.getAllMarriageCertificates);
router.get("/:id",verifyToken, marriageController.getMarriageCertificateById);
router.put("/:id",verifyToken, marriageController.updateMarriageCertificate);
router.delete("/:id",verifyToken, marriageController.deleteMarriageCertificate);

module.exports = router;
