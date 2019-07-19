exports.up = function(knex) {
  return knex.schema.createTable("contexts", tbl => {
    tbl.increments();

    tbl.text("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("contexts");
};
