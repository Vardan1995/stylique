const express = require('express')
const router = express.Router()
const controller = require('../controllers/category')
const validator = require('../validations/validators')
const validate = require('../validations/validate')
const { admin, auth, moderator } = require('../middlewares/auth')
const adminModeratorAuth = [auth, moderator]
const adminAuth = [auth, admin]

router.post('/', adminModeratorAuth, validate(validator.createCategory), controller.createCategory)
router.get('/:id', auth, controller.getCategory)
router.get('/', auth, controller.getCategories)
router.delete('/:id', adminAuth, controller.deleteCategory)

module.exports = router