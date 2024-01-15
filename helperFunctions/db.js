const mongoose = require("mongoose");
// require("dotenv").config({ path: "../config/config.env" });

async function connectDB() {
  mongoose
    .connect(process.env.DB_URI)
    .then((res) => {
      console.log("connected to DB at string ");
    })
    .catch((err) => {
      console.log("Error");
    });
}

module.exports = connectDB;
