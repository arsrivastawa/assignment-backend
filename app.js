const express = require("express");
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v2", product);
app.use("/api/v1", user);

module.exports = app;
