const express = require("express");
const router = express.Router();
const taxController = require("../controllers/taxController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, taxController.createTax);
router.get("/",verifyToken, taxController.getAllTaxForms);
router.get("/:id",verifyToken, taxController.getTaxById);
router.put("/:id",verifyToken, taxController.updateTax);
router.delete("/:id",verifyToken, taxController.deleteTax);

module.exports = router;
