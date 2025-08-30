const bcrypt = require('bcryptjs')
const fs = require('fs').promises
const path = require('path')

class AuthService {
    async postRegister(users, validated) {
        validated.id = Date.now()
        const hashedPass = await bcrypt.hash(validated.password, 10)
        validated.password = hashedPass
        users.push(validated)
        await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
        await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
        return users
    }
    async postLogin(users, body) {
        const user = users.find(u => u.email === body.email)
        return user
    }
}

module.exports = { AuthService }