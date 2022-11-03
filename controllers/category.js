const categoryRepo = require('../repositories/categoty')

exports.createCategory = async function (req, res, next) {
    try {
        const category = req.body
        const newCategory = await categoryRepo.create(category)
        res.status(201).json(newCategory)
    } catch (ex) {
        next(ex)
    }
}

exports.getCategory = async function (req, res, next) {
    try {
        const { id } = req.params
        const category = await categoryRepo.getOne(id)
        res.status(201).json(category)
    } catch (ex) {
        next(ex)
    }
}

exports.getCategories = async function (req, res, next) {
    try {
        const category = await categoryRepo.getAll()
        res.status(201).json(category)
    } catch (ex) {
        next(ex)
    }
}

exports.deleteCategory = async function (req, res, next) {
    try {
        const { id } = req.params
        const category = await categoryRepo.delete(id)
        res.status(202).json(category)
    } catch (ex) {
        next(ex)
    }
}
