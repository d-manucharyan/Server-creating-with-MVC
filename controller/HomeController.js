class HomeController {
    async getHome(req, res, next) {
        res.render('home');
    }
}

module.exports = { HomeController }