const express = require("express");
const router = express.Router();
const ageCertificateController = require("../controllers/ageCertificateController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken,ageCertificateController.createAgeCertificate);
router.get("/",verifyToken, ageCertificateController.getAllAgeCertificates);
router.get("/:id",verifyToken, ageCertificateController.getAgeCertificateById);
router.put("/:id", verifyToken,ageCertificateController.updateAgeCertificate);
router.delete("/:id",verifyToken, ageCertificateController.deleteAgeCertificate);

module.exports = router;
