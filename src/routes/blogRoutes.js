const blogRoutes = require("express").Router()
const blogControllers = require("../controllers/blogControllers")

blogRoutes.get("/", blogControllers.getAllBlog)
blogRoutes.post("/", blogControllers.postBlog)
blogRoutes.delete("/:id",blogControllers.deleteBlog)

module.exports = blogRoutes