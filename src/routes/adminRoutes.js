const adminRoutes = require('express').Router();
const adminController = require('../controllers/adminControllers')


adminRoutes.post("/", adminController.signUp);

module.exports = adminRoutes