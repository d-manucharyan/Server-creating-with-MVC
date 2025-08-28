class AuthController {
    async getRegister(req, res, next) {
        res.render('register')
    }
    async getLogin(req, res, next) {
        res.render('login')
    }
}

module.exports = { AuthController }