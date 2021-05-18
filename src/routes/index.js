const mainRoutes = require("express").Router();
const adminRoutes = require("./adminRoutes");
const blogRoutes = require("./blogRoutes");

mainRoutes.use("/auth", adminRoutes);
mainRoutes.use("/blog", blogRoutes);
module.exports = mainRoutes;
