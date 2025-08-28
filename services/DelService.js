const fs = require('fs').promises
const path = require('path');

class DelService {
    async delUsers(users, id) {
        users = users.filter(u => u.id != id)
        await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
        await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
        return users
    }
}

module.exports = { DelService }