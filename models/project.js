const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function insert(post) {
  return db('projects')
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('projects')
    .where('id', id)
    .del();
}