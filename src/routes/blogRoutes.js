const blogRoutes = require("express").Router();
const blogControllers = require("../controllers/blogControllers");
const authMiddleware = require("../helpers/authMiddleware");
const uploadMiddleware = require("../helpers/uploadMiddleware");
const cloudinary = require("../helpers/cloudinary");
const uploadCloudinary = require("../helpers/cloudinary");

blogRoutes.get("/", authMiddleware.checkLogin, blogControllers.getAllBlog);
blogRoutes.post(
  "/",
  uploadMiddleware,
  uploadCloudinary,
  blogControllers.postBlog
);
blogRoutes.delete("/:id", blogControllers.deleteBlog);

module.exports = blogRoutes;
