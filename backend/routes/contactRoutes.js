const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, contactController.createContact);
router.get("/",verifyToken, contactController.getAllContacts);
router.get("/:id",verifyToken, contactController.getContactById);
router.put("/:id",verifyToken, contactController.updateContact);
router.delete("/:id",verifyToken, contactController.deleteContact);

module.exports = router;
