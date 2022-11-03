const Joi = require("joi");

const login = Joi.string().min(3).max(30).required()
const description = Joi.string().min(3).max(50).required()
const name = Joi.string().min(3).max(30).required()
const role = Joi.string().valid('moderator', 'admin', 'member',).required()
const password = Joi.string().min(3).max(50).required()
const content = Joi.string().min(3).max(250).required()

const id = Joi.number().min(1).required()

exports.signIn = Joi.object({
    password,
    login
})

exports.signUp = Joi.object({
    password,
    login,
    name,
    role
})

exports.createCategory = Joi.object({
    description,
    name,
})

exports.getCategory = Joi.object({
    id
})

exports.createArticle = Joi.object({
    name,
    content,
    category_id: id
})






