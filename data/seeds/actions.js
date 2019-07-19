exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          description: "Build my website portfolio",
          notes: "Check Gatsby Out",
          completed: 0,
          project_id: 1
        },
        {
          id: 2,
          description: "Build my website portfolio",
          notes: "Check Gatsby Out",
          completed: 0,
          project_id: 1
        },
        {
          id: 3,
          description: "Build my website portfolio",
          notes: "Check Gatsby Out",
          completed: 0,
          project_id: 2
        }
      ]);
    });
};
