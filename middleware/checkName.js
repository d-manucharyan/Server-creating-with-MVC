const nameUpperCase = (req, res, next) => {
    const {name} = req.body
    if(typeof name === 'string') {
        req.body.name = name.split('')[0].toUpperCase() + name.slice(1)
    }
    next()
}

module.exports = {nameUpperCase}