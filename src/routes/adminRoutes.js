const adminRoutes = require('express').Router();
const adminController = require('../controllers/adminControllers')

adminRoutes.get("/", adminController.getAllAdmin);

module.exports = adminRoutes