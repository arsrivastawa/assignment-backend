const app = require("./app");
require("dotenv").config({ path: "config/config.env" });
const connectDB = require("./helperFunctions/db");
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server Started at Port ", process.env.PORT);
});
