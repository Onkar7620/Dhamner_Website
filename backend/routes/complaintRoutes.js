const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaintController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, complaintController.createComplaint);
router.get("/",verifyToken, complaintController.getAllComplaints);
router.get("/:id",verifyToken, complaintController.getComplaintById);
router.put("/:id",verifyToken, complaintController.updateComplaint);
router.delete("/:id",verifyToken, complaintController.deleteComplaint);

module.exports = router;
