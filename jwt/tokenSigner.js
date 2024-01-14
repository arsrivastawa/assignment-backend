const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "./config/config.env" });

function signToken(uid) {
  const token = jwt.sign({ userID: uid }, process.env.SECR, {
    expiresIn: "15d",
  });
  return token;
}

module.exports = { signToken };
