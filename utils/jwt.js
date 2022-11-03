const jwt = require('jsonwebtoken')
const { JWT_PRIVATE_KEY } = process.env

module.exports = function (obj) {
    const token = jwt.sign(
        obj,
        JWT_PRIVATE_KEY
    )
    return token
}