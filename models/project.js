const db = require("../data/dbConfig.js");

get = async () => {
  return db("projects");
};

getById = async id => {
  return db("projects")
    .where({ id })
    .first();
};

insert = async post => {
  return db("projects")
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
};

update = async (id, changes) => {
  return db("projects")
    .where({ id })
    .update(changes);
};

remove = async id => {
  return db("projects")
    .where("id", id)
    .del();
};

getProjectActions = async id => {
  return await db("actions")
    .join("projects", "projects.id", "project_id")
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
