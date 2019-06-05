const db = require('../data/dbConfig');

module.exports = {
    find,
    getById,
    add,
    remove,
    update
};

function find() {
    return ('students');
}

function getById(id) {
    return ('students')
        .where({ id })
        .first();
}

function add(students) {
    return ('students')
        .insert(students)
        .then(ids => {
            return getById(ids[0]);
        });
}

function remove(id) {
    return ('students')
        .where('id', id)
        .del();
}

function update(id, changes) {
    return ('students')
        .where({ id })
        .update(changes);
}