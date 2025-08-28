var express = require('express')
var editRouter = express.Router()
const path = require('path')
const fs = require('fs').promises
const bcrypt = require('bcryptjs')
const { editSchema } = require('../schema/editSchema')

const { readData, checkEmailEdit } = require('../middleware')
const { EditController } = require('../controller/EditController')
const editController = new EditController()

// edit get
editRouter.get('/edit/:id', readData, editController.getEdit)

editRouter.post('/edit/:id', readData, checkEmailEdit, async (req, res) => {
    const { users } = res.locals
    const user = users.find(u => u.id == req.params.id)

    if (!user) {
        return res.status(404).send("User not found")
    }
    const validated = await editSchema.validateAsync(req.body)
    user.name = validated.name
    user.email = validated.email
    user.age = validated.age

    if (validated.password && validated.password.trim() !== "") {
        const hashedPass = await bcrypt.hash(validated.password, 10)
        user.password = hashedPass
    }

    await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect(`/main/${user.id}`)
})

module.exports = editRouter 