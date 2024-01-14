const { hashIt, compareIt } = require("../helperFunctions/Password");
const { signToken } = require("../jwt/tokenSigner");
const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const found = await userModel.find({ email: email });
  if (found[0]) {
    console.log(found[0].password);
    res.status(200).json({ state: "exists" });
  } else {
    const [salt, hashPassword] = hashIt(password);
    const token = signToken(email);
    const inserted = await userModel.create({
      name,
      email,
      password: hashPassword,
      salt,
    });
    res.status(200).json({ state: "created", token });
    console.log(inserted);
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const found = await userModel.find({ email: email });
  if (found[0]) {
    const verified = compareIt(password, found[0].password);
    if (verified) {
      const token = signToken(found[0].email);
      res.status(200).json({ state: "verified", token });
    } else {
      res.status(200).json({ state: "unVerified" });
    }
  } else {
    res.status(200).json({ state: "doesNotExist" });
  }
};

module.exports = { createUser, LoginUser };
