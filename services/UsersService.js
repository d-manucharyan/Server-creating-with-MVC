class UsersService {
    async getUsers(users, query) {
        const { name, sort } = query
        if (name) {
            users = users.filter(u =>
                u.name.toLowerCase().includes(name.toLowerCase())
            )
        }

        if (sort === 'minage') {
            users.sort((a, b) => a.age - b.age)
        }

        if (sort === 'maxage') {
            users.sort((a, b) => b.age - a.age)
        }
        return users
    }
}

module.exports = { UsersService }