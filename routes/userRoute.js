const express = require("express");
const {
  createUser,
  LoginUser,
  existingUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(LoginUser);
router.route("/user").post(existingUser);

module.exports = router;
