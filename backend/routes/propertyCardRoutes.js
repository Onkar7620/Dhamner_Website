
const express = require("express");
const router = express.Router();
const propertyCardController = require("../controllers/propertyCardController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, propertyCardController.createPropertyCard);
router.get("/",verifyToken, propertyCardController.getAllPropertyCards);
router.get("/:id",verifyToken, propertyCardController.getPropertyCardById);
router.put("/:id",verifyToken, propertyCardController.updatePropertyCard);
router.delete("/:id",verifyToken, propertyCardController.deletePropertyCard);

module.exports = router;