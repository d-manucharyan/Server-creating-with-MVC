const { schema } = require("../schema")

class AuthController {
    async getRegister(req, res, next) {
        res.render('register')
    }
    async getLogin(req, res, next) {
        res.render('login')
    }
    async postRegister(req, res, next) {
        try {
            let { users } = res.locals
            const validated = await schema.validateAsync(req.body)
            users = req.app.locals.services.authService.postRegister(users, validated)
            res.redirect('/auth/login')
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    async postLogin(req, res, next) {
        const { users } = res.locals
        const user = await req.app.locals.services.authService.postLogin(users, req.body)
        res.redirect(`/main/${user.id}`)
    }
}

module.exports = { AuthController }