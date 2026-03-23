const express = require("express");
const router = express.Router();
const land8AController = require("../controllers/land8AController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, land8AController.createLand8A);
router.get("/",verifyToken, land8AController.getAllLand8A);
router.get("/:id",verifyToken, land8AController.getLand8AById);
router.put("/:id",verifyToken, land8AController.updateLand8A);
router.delete("/:id",verifyToken, land8AController.deleteLand8A);

module.exports = router;
