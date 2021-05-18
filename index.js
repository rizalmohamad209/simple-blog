require("dotenv").config({});
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const mainRoutes = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", mainRoutes);

app.use(express.static("public"));
app.listen(port, () => {
  console.log("Server running in port", port);
});
