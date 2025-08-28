var express = require('express');
var mainRouter = express.Router();
const { readData } = require('../middleware/readData');
const { MainController } = require('../controller/MainController');
const mainController = new MainController()

mainRouter.get('/main/:id', readData, mainController.getMain)

module.exports = mainRouter;
