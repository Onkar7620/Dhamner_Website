const express = require("express");
const router = express.Router();
const noDuesController = require("../controllers/noDuesController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, noDuesController.createNoDues);
router.get("/",verifyToken, noDuesController.getAllNoDues);
router.get("/:id",verifyToken, noDuesController.getNoDuesById);
router.put("/:id",verifyToken, noDuesController.updateNoDues);
router.delete("/:id",verifyToken, noDuesController.deleteNoDues);

module.exports = router;
