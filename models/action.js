const db = require("../data/dbConfig.js");

function get() {
  return db("actions");
}

function getById(id) {
  return db("actions")
    .where({ id })
    .first();
}

function insert(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("actions")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("actions")
    .where("id", id)
    .del();
}

assignContext = async (action_id, context_id) => {
  return await db("action_context").insert({ action_id, context_id });
};

getContexts = async action_id => {
  return await db("action_context")
    .select("contexts.name")
    .join("contexts", "action_context.context_id", "contexts.id")
    .where({ "action_context.action_id": action_id });
};

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  assignContext,
  getContexts
};
