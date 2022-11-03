/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('article', (table) => {
        table.increments();
        table.text('name');
        table.text('content');
        table.timestamps(true, true);
        table.bigInteger('category_id').unsigned().index().references('id').inTable('category');
        table.bigInteger('user_id').unsigned().index().references('id').inTable('user');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('article');
};
