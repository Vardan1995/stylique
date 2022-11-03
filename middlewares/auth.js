const jwt = require("jsonwebtoken")
const { JWT_PRIVATE_KEY } = process.env

exports.auth = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) return res.status(401).json({ message: "Access denied. No token provided." })
        token = token?.split(' ')[1]
        const decoded = jwt.verify(token, JWT_PRIVATE_KEY)
        req.user = decoded
        next()
    } catch (ex) {
        res.status(401).json({ message: ex.message })
    }
}

exports.moderator = async function (req, res, next) {
    try {
        if (req.user.role !== "moderator") return res.status(401).json({ message: "Access denied. require moderator permission" })
        next()
    } catch (ex) {
        res.status(401).json({ message: ex.message })
    }
}

exports.admin = async function (req, res, next) {
    try {
        if (req.user.role !== "admin") return res.status(401).json({ message: "Access denied. require admin permission" })
        next()
    } catch (ex) {
        res.status(401).json({ message: ex.message })
    }
}
exports.admin_moderator = async function (req, res, next) {
    try {
        if (req.user.role !== "admin" || req.user.role !== "moderator") return res.status(401).json({ message: "Access denied. require admin permission" })
        next()
    } catch (ex) {
        res.status(401).json({ message: ex.message })
    }
}