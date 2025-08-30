var express = require('express');
var homeRouter = express.Router();

const { ViewController } = require('../controller/viewController');
const viewController = new ViewController()

homeRouter.get('/', viewController.getHome)

module.exports = homeRouter;
