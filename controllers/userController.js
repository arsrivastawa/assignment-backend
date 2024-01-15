const { hashIt, compareIt } = require("../helperFunctions/Password");
const { signToken } = require("../jwt/tokenSigner");
const { verifyToken } = require("../jwt/tokenVerifier");
const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const found = await userModel.find({ email: email });
  if (found[0]) {
    console.log(found[0].password);
    res.status(200).json({ state: "exists" });
  } else {
    const [salt, hashPassword] = hashIt(password);
    const inserted = await userModel.create({
      name,
      email,
      password: hashPassword,
      salt,
    });
    res.status(200).json({ state: "created" });
    console.log(inserted);
  }
};

async function existingUser(req, res) {
  const { token } = req.body;
  const decoded = verifyToken(token);
  console.log(decoded);
  const found = await userModel.find({ email: decoded.userID });
  console.log(found);
  if (found[0]) {
    res.status(200).json({
      name: found[0].name,
      email: found[0].email,
    });
  }
}

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const found = await userModel.find({ email: email });
  if (found[0]) {
    const verified = compareIt(password, found[0].password);
    if (verified) {
      const token = signToken(found[0].email);
      res.status(200).json({
        state: "verified",
        token,
        userData: {
          name: found[0].name,
          email: found[0].email,
        },
      });
    } else {
      res.status(200).json({ state: "unVerified" });
    }
  } else {
    res.status(200).json({ state: "doesNotExist" });
  }
};

module.exports = { createUser, LoginUser, existingUser };
