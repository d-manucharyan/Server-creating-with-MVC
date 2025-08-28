function checkEmailEdit(req, res, next) {
    const { users } = res.locals
    const userId = req.params.id
    const existingUser = users.find(u => u.email == req.body.email && u.id != userId)

    if (existingUser) {
        return res.status(400).json({ error: "Email has already registered" })
    }

    next()
}

module.exports = { checkEmailEdit }