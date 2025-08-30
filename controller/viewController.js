class ViewController {
    async getHome(req, res, next) {
        res.render('home');
    }
    async getMain(req, res, next) {
        const { users } = res.locals
        const user = users.find(u => u.id == req.params.id)
        res.render('main', { user })
    }
}

module.exports = { ViewController }