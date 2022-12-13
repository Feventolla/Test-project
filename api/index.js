const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config(); //loads all enviroment variables from .env files

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connection created"));

app.use(express.json());
app.use(cors());

const userRouter = require("./Router/users");
app.use("/", userRouter);

app.listen(4000, () => {
  console.log("server started!");
});
