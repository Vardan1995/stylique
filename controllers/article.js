const articleRepo = require('../repositories/article')

exports.createArticle = async function (req, res, next) {
    try {
        const id = req.user.id
        const article = req.body
        article.user_id = id
        const newArticle = await articleRepo.create(article)
        res.status(201).json(newArticle)
    } catch (ex) {
        next(ex)
    }
}

exports.getArticles = async function (req, res, next) {
    try {
        const newArticle = await articleRepo.getAll()
        res.status(201).json(newArticle)
    } catch (ex) {
        next(ex)
    }
}
