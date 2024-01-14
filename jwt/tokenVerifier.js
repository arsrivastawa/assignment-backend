const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "./config/config.env" });

function verifyToken(token) {
  const decoded = jwt.verify(token, process.env.SECR);
  return decoded;
}

module.exports = { verifyToken };
