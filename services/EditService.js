const fs = require('fs').promises
const path = require('path');
const bcrypt = require('bcryptjs');

class EditService {
    async postEdit(users, id, validated) {
        const user = users.find(u => u.id == id)
        if (!user) {
            return null
        }
        user.name = validated.name
        user.email = validated.email
        user.age = validated.age
        const hashedPass = await bcrypt.hash(validated.password, 10)
        user.password = hashedPass

        await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
        await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users, null, 2))
        return user
    }
}

module.exports = { EditService }