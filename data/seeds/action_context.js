exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("action_context")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("action_context").insert([
        { id: 1, action_id: 1, context_id: 1 }
      ]);
    });
};
