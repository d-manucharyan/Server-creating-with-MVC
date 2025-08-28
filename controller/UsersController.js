class UserController {
    async getUsers(req, res, next) {
        let { users } = res.locals
        users = await req.app.locals.services.usersService.getUsers(users, req.query)
        res.render('users', { users })
    }
}

module.exports = { UserController }