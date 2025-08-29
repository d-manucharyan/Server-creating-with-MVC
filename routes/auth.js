var express = require('express');
var authRouter = express.Router();

const { readData, checkEmail, nameUpperCase, checkLogin } = require('../middleware');
const { AuthController } = require('../controller/AuthController');
const authController = new AuthController()

// auth gets 
authRouter.get('/register', authController.getRegister)
authRouter.get('/login', authController.getLogin)
// auth posts
authRouter.post('/register', readData, checkEmail, nameUpperCase, authController.postRegister)
authRouter.post('/login', readData, checkLogin, authController.postLogin)

module.exports = authRouter;
