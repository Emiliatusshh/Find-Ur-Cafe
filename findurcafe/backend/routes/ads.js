const { Router } = require("express");
const { createAds, getAds } = require("../controller/ads.controller");
const authorize = require("../middleware/authorize");
const onlyAdmin = require("../middleware/onlyadmin");
const upload = require("../middleware/upload");

const router = Router();

router.get("/", getAds);
router.post("/", authorize, onlyAdmin, upload.single("image"), createAds);

module.exports = router;
