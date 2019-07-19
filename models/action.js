const db = require("../data/dbConfig.js");

get = async () => {
  return db("actions");
};

getById = async id => {
  return db("actions")
    .where({ id })
    .first();
};

insert = async action => {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getById(ids[0]);
    });
};

update = async (id, changes) => {
  return db("actions")
    .where({ id })
    .update(changes);
};

remove = async id => {
  return db("actions")
    .where("id", id)
    .del();
};

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};
