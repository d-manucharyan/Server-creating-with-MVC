const path = require('path')
const { editSchema } = require('../schema/editSchema')

class EditController {
    async getEdit(req, res) {
        const { users } = res.locals
        const user = users.find(u => u.id == req.params.id)
        res.render(path.join(__dirname, '..', 'views', 'editUser.ejs'), { user })
    }

    async postEdit(req, res) {
        try {
            const { users } = res.locals
            const validated = await editSchema.validateAsync(req.body)
            const user = await req.app.locals.services.ediitService.postEdit(users, req.params.id, validated)
            if (!user) {
                return res.status(404).send("User not found")
            }
            res.redirect(`/main/${user.id}`)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = { EditController }