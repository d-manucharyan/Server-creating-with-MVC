const bcrypt = require('bcryptjs')

const checkLogin = async (req, res, next) => {
    const { users } = res.locals
    const foundUser = users.find(u => u.email === req.body.email)
    if (!foundUser) {
        return res.status(422).json({ error: 'Wrong username or password' })
    } else {
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if (!isMatch) {
            return res.status(422).json({ error: 'Wrong username or password' })
        }
    }
    next()
}

module.exports = { checkLogin }