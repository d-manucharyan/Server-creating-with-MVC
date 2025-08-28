const fs = require('fs').promises
const path = require('path')

const readData = async (req, res, next) => {
    try {
        const users = JSON.parse(await fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf-8'))
        res.locals.users = users
        next()
    } catch (err) {
        res.status(404).json({ error: 'Data Not Found' })
    }
}

module.exports = { readData }