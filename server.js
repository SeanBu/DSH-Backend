const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require("method-override");

require("dotenv").config();
require("./config/db.connection.js");

const PORT = process.env.PORT;
const {
  userController,
  reviewController,
  courseController,
} = require("./controllers");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/user", userController);
app.use("/review", reviewController);
app.use("/course", courseController);

app.get("/", (req, res) => {
  res.send("Dont Swear Here");
});

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
