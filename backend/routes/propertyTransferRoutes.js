const express = require("express");
const router = express.Router();
const propertyTransferController = require("../controllers/propertyTransferController");
const { verifyToken } = require("../middleware/authMiddleware");
// ✅ ALL ROUTES
router.post("/",verifyToken, propertyTransferController.createPropertyTransfer);
router.get("/",verifyToken, propertyTransferController.getAllPropertyTransfers);
router.get("/:id",verifyToken, propertyTransferController.getPropertyTransferById);
router.put("/:id",verifyToken, propertyTransferController.updatePropertyTransfer);
router.delete("/:id",verifyToken, propertyTransferController.deletePropertyTransfer);

module.exports = router;