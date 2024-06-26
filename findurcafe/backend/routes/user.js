const { Router } = require("express");

const {
  changePassword,
  getUsers,
  updateUser,
  createUser,
  login,
  getProfileLogined,
} = require("../controller/user.controller");
const authorize = require("../middleware/authorize");

const router = Router();

router.get("/", authorize, getUsers);
router.post("/", createUser);
router.patch("/:id/general", authorize, updateUser);
router.post("/login", login);
router.get("/me", authorize, getProfileLogined);
router.patch("/change-password", authorize, changePassword);

module.exports = router;
