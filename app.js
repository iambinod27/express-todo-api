const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const itemRoute = require("./routes/item");

app.use("/items", itemRoute);

// Connecting Database

const mongoString = process.env.ATLAS_URI;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to TODO API </h1>");
});

const PORT = process.env.PORT || 5000;
mongoose.connect(mongoString);

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
