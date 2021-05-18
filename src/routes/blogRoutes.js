const blogRoutes = require("express").Router();
const blogControllers = require("../controllers/blogControllers");
const authMiddleware = require("../helpers/authMiddleware");
const uploadMiddleware = require("../helpers/uploadMiddleware");
const uploadCloudinary = require("../helpers/cloudinary");

blogRoutes.get("/", authMiddleware.checkLogin, blogControllers.getAllBlog);
blogRoutes.post(
  "/",
  uploadMiddleware,
  uploadCloudinary,
  blogControllers.postBlog
);
blogRoutes.get("/:id", blogControllers.getBlogById);
blogRoutes.delete("/:id", blogControllers.deleteBlog);
blogRoutes.put(
  "/:id",
  uploadMiddleware,
  uploadCloudinary,
  blogControllers.editBlog
);

module.exports = blogRoutes;
