const express = require("express");
const router = express.Router();
const land712Controller = require("../controllers/land712Controller");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, land712Controller.createLand712);
router.get("/",verifyToken, land712Controller.getAllLand712);
router.get("/:id",verifyToken, land712Controller.getLand712ById);
router.put("/:id",verifyToken, land712Controller.updateLand712);
router.delete("/:id",verifyToken, land712Controller.deleteLand712);

module.exports = router;
