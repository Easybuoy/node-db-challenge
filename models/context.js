const db = require("../data/dbConfig.js");

function get() {
  return db("contexts");
}

function getById(id) {
  return db("contexts")
    .where({ id })
    .first();
}

function insert(action) {
  return db("contexts")
    .insert(action)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("contexts")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("contexts")
    .where("id", id)
    .del();
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};
