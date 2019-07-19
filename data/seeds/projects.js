exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Build portfolio",
          description: "Build my website portfolio!!!!",
          completed: 0
        },
        {
          id: 2,
          name: "Build Movie app",
          description: "Build Movie app to list movies",
          completed: 0
        },
        {
          id: 3,
          name: "Build News app",
          description: "Build app to list latest news",
          completed: 0
        }
      ]);
    });
};
