
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { cohort_id: 1, name: 'Jared' },
        { cohort_id: 2, colName: 'Amy' },
        { cohort_id: 3, colName: 'Harry' }
      ]);
    });
};
