var express = require('express');
var userRouter = express.Router();
const { readData } = require('../middleware/readData');
const { UserController } = require('../controller/UsersController');
const userController = new UserController()

userRouter.get('/users', readData, userController.getUsers);

module.exports = userRouter;