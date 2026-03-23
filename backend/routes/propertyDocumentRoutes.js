const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const propertyDocumentController = require("../controllers/propertyDocumentController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, propertyDocumentController.createPropertyDocument);
router.get("/",verifyToken, propertyDocumentController.getAllPropertyDocuments);
router.get("/:id",verifyToken, propertyDocumentController.getPropertyDocumentById);
router.put("/:id",verifyToken, propertyDocumentController.updatePropertyDocument);
router.delete("/:id",verifyToken, propertyDocumentController.deletePropertyDocument);

module.exports = router;
