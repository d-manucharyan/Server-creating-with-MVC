var express = require('express');
const { readData } = require('../middleware/readData');
var delRouter = express.Router();

const DelController = require('../controller/DelController');
const delController = new DelController

delRouter.post('/main/:id', readData, delController.delUsers)

module.exports = delRouter;
