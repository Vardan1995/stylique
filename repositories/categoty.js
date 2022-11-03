const knex = require('../db/knex');

module.exports = {
    getAll() {
        return knex('category');
    },
    getOne(id) {
        return knex('category').where('id', id).first();
    },
    getOneByLogin(login) {
        return knex('category').where('login', login).first();
    },
    create(category) {
        return knex('category').insert(category, '*');
    },
    delete(id) {
        return knex('category').where('id', id).del();
    }
}
