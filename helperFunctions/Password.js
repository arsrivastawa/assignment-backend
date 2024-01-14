const bc = require("bcrypt");

function hashIt(passwordToBeHashed) {
  let salt = bc.genSaltSync(10);
  let hashedpassword = bc.hashSync(passwordToBeHashed, salt);
  return [salt, hashedpassword];
}

function compareIt(plainPassword, hashedpassword) {
  const result = bc.compareSync(plainPassword, hashedpassword);
  return result;
}
module.exports = { hashIt, compareIt };
