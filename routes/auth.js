var express = require('express');
var authRouter = express.Router();

const fs = require('fs').promises
const path = require('path')
const bcrypt = require('bcryptjs');

const { schema } = require('../schema');
const {readData, checkEmail, nameUpperCase, checkLogin} = require('../middleware');
const { AuthController } = require('../controller/AuthController');
const authController = new AuthController()

// auth gets 
authRouter.get('/register', authController.getRegister)
authRouter.get('/login', authController.getLogin)


authRouter.post('/register', readData, checkEmail, nameUpperCase, async function (req, res, next) {
  try {
    const { users } = res.locals
    const validated = await schema.validateAsync(req.body)
    validated.id = Date.now()
    const hashedPass = await bcrypt.hash(validated.password, 10)
    validated.password = hashedPass
    users.push(validated)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect('/auth/login')
  } catch (err) {
    res.json(err)
  }
})

authRouter.post('/login', readData, checkLogin, async function (req, res, next) {
  const { users } = res.locals
  const user = users.find(u => u.email == req.body.email)

  if (!user) {
    return res.status(401).send("User not found")
  }

  res.redirect(`/main/${user.id}`)
})

module.exports = authRouter;
