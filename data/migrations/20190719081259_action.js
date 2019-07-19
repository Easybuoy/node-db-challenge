exports.up = function(knex) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.text("name", 128).notNullable();
    tbl.text("description", 128).notNullable();
    tbl.text("notes").notNullable();
    tbl
      .integer("completed")
      .notNullable()
      .defaultTo(0);

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions");
};
