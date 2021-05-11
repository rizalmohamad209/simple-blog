const blogRoutes = require("express").Router()
const blogControllers = require("../controllers/blogControllers")

blogRoutes.get("/", blogControllers.getAllBlog)

module.exports = blogRoutes