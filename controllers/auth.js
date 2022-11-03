const userRepo = require('../repositories/user')
const bcrypt = require('bcrypt')
const generateAuthToken = require('../utils/jwt')

exports.signUp = async function (req, res, next) {
    try {
        const user = req.body
        const userExist = await userRepo.getOneByLogin(user.login)
        if (userExist) return res.status(409).json({ message: "User with specified login already exists" })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        const newUser = await userRepo.create(user)
        res.status(201).json(newUser)
    } catch (ex) {
        next(ex)
    }
}

exports.signIn = async function (req, res, next) {
    try {
        const { login, password } = req.body
        const user = await userRepo.getOneByLogin(login)
        if (!user) return res.status(404).json({ message: 'Wrong login or password' })
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) return res.status(400).json({ message: "Wrong login or password" })
        const token = generateAuthToken({ id: user.id, role: user.role })
        res.status(201).json({ token })
    } catch (ex) {
        next(ex)
    }
}