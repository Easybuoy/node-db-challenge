exports.up = function(knex) {
  return knex.schema.createTable("action_context", tbl => {
    tbl.increments();

    tbl
      .integer("action_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("context_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("contexts")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("action_context");
};
