const express = require("express");
const { createUser, LoginUser } = require("../controllers/userController");

const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(LoginUser);

module.exports = router;
