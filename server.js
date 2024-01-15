const app = require("./app");
require("dotenv").config({ path: "config/config.env" });
const connectDB = require("./helperFunctions/db");
connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
