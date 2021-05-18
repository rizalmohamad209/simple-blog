require("dotenv").config({});
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mainRoutes = require("./src/routes");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log("Server running in port", port);
});
