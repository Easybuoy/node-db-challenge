const db = require("../data/dbConfig.js");

function get() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("projects")
    .where("id", id)
    .del();
}

getProjectActions = async id => {
  return await db("actions")
    .join("projects", "projects.id", "project_id")
    .select('actions.id', 'notes', 'actions.description', 'actions.completed')
    .where({ project_id: id });
};

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getProjectActions
};
