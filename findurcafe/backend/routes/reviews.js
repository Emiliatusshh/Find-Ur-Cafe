const { Router } = require("express");

const { createReview, getReviews } = require("../controller/review.controller");
const authorize = require("../middleware/authorize");
const upload = require("../middleware/upload");

const router = Router();

router.get("/:id", authorize, getReviews);
router.post("/", authorize, upload.single("image"), createReview);

module.exports = router;
