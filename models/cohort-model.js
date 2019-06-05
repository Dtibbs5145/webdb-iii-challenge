const db = require('../data/dbConfig');

module.exports = {
    find,
    getById,
    getStudentById,
    add,
    update,
    remove
}

function find() {
    return db('cohorts')
}

function getById(id) {
    return db('cohorts')
        .where({ id })
        .first();
}

function getStudentById(id) {
    return db('cohorts')
        .where({ id })
        .first();
}

function add(cohort) {
    return db('cohorts')
        .insert(cohorts)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('cohorts')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('cohorts')
        .where('id', id)
        .del();
}
