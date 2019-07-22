
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable();
        tbl.text('description', 128)
        .notNullable();
        tbl.integer('completed')
        .notNullable().defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
};
