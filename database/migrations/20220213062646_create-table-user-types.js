/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex) {
    return knex.schema.createTable('user_types', function (table) {
        table.increments();
        table.string('name');
        table.string('description');
        table.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_types')
};
