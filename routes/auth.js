const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
const validator = require('../validations/validators')
const validate = require('../validations/validate')
router.post('/sign-up', validate(validator.signUp), controller.signUp)
router.post('/sign-in', validate(validator.signIn), controller.signIn)

module.exports = router