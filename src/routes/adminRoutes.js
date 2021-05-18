const adminRoutes = require("express").Router();
const adminController = require("../controllers/adminControllers");

adminRoutes.post("/sign-up", adminController.signUp);
adminRoutes.post("/sign-in", adminController.signIn);
adminRoutes.put("/:id", adminController.editAdmin);

module.exports = adminRoutes;
