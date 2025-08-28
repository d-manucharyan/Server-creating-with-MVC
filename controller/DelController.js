class DelController {
    async delUsers(req, res, next) {
        let { users } = res.locals
        users = await req.app.locals.services.delService.delUsers(users, req.params.id)
        res.redirect(`/`)
    }
}

module.exports = DelController