const path = require('path')

class EditController {
    async getEdit(req, res) {
        const { users } = res.locals
        const user = users.find(u => u.id == req.params.id)
        res.render(path.join(__dirname, '..', 'views', 'editUser.ejs'), { user })
    }
}

module.exports = {EditController}