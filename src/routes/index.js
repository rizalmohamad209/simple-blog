const mainRoutes = require("express").Router();
const adminRoutes = require("./adminRoutes");
const blogRoutes = require("./blogRoutes")

mainRoutes.use("/admin", adminRoutes);
mainRoutes.use("/blog", blogRoutes)
module.exports = mainRoutes