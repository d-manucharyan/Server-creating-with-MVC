var express = require('express');
var homeRouter = express.Router();
const { HomeController } = require('../controller/homeController');
const homeController = new HomeController()

homeRouter.get('/', homeController.getHome)


module.exports = homeRouter;
