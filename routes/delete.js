var express = require('express');
const { readData } = require('../middleware/readData');
var delRouter = express.Router();
const path = require('path')
const fs = require('fs').promises

delRouter.post('/main/:id', readData, async function (req, res, next) {
    let { users } = res.locals
    users = users.filter(u => u.id != req.params.id)
    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect(`/`)
})

module.exports = delRouter;
