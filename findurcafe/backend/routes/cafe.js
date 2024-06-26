const { Router } = require("express");
const {
  getCafe,
  getCafes,
  createCafe,
  updateCafe,
  deleteCafe,
} = require("../controller/cafe.controller");
const authorize = require("../middleware/authorize");
const onlyAdmin = require("../middleware/onlyadmin");
const upload = require("../middleware/upload");

const router = Router();

router.get("/", getCafes);
router.get("/:id", authorize, getCafe);
router.post("/", authorize, onlyAdmin, upload.single("image"), createCafe);
router.patch("/:id", authorize, onlyAdmin, upload.single("image"), updateCafe);
router.delete("/:id", authorize, onlyAdmin, deleteCafe);

module.exports = router;
