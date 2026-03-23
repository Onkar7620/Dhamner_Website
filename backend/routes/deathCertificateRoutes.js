const express = require("express");
const router = express.Router();
const deathController = require("../controllers/deathCertificateController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, deathController.createDeathCertificate);
router.get("/",verifyToken,deathController.getAllDeathCertificates);
router.get("/:id",verifyToken, deathController.getDeathCertificateById);
router.put("/:id",verifyToken, deathController.updateDeathCertificate);
router.delete("/:id",verifyToken, deathController.deleteDeathCertificate);

module.exports = router;
