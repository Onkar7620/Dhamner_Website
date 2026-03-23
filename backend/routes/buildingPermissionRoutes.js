const express = require("express");
const router = express.Router();
const buildingController = require("../controllers/buildingPermissionController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/",verifyToken, buildingController.createBuildingPermission);
router.get("/",verifyToken, buildingController.getAllBuildingPermissions);
router.get("/:id",verifyToken, buildingController.getBuildingPermissionById);
router.put("/:id",verifyToken, buildingController.updateBuildingPermission);
router.delete("/:id",verifyToken, buildingController.deleteBuildingPermission);

module.exports = router;
