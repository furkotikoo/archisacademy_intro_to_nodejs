/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("user_details", function (table) {
        table.increments();
        table.string("name");
        table.string("userName").unique();
        table.string("address");
        table.string("phone")
        table.timestamps()

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("user_details");
};
