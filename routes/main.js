var express = require('express');
var mainRouter = express.Router();
const { readData } = require('../middleware/readData');
const { ViewController } = require('../controller/viewController');
const viewController = new ViewController()

mainRouter.get('/main/:id', readData, viewController.getMain)

module.exports = mainRouter;
