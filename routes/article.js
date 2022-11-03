const express = require('express')
const router = express.Router()
const controller = require('../controllers/article')
const validator = require('../validations/validators')
const validate = require('../validations/validate')
const { auth, moderator } = require('../middlewares/auth')
const moderatorAuth = [auth, moderator]

router.post('/', moderatorAuth, validate(validator.createArticle), controller.createArticle)
router.get('/', auth, controller.getArticles)



module.exports = router