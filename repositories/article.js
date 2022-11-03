const knex = require('../db/knex'); // the connection!


module.exports = {
    getAll() {
        return knex
            .select("category.name as category", "user.name as publisher", "article.*")
            .from('article')
            .join('user', 'article.user_id', '=', 'user.id')
            .join('category', 'article.category_id', '=', 'category.id')

    },
    getOne(id) {
        return knex('article').where('id', id).first();
    },
    create(article) {
        return knex('article').insert(article, '*');
    },
    delete(id) {
        return knex('article').where('id', id).del();
    }
}
