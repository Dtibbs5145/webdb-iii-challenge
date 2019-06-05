
exports.up = function(knex, Promise) {
  return knex.schema.creatTable('students', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl
        .integer('cohort_id')
        .unsigned()
        .reference('id')
        inTable('cohorts')
        onDelete('CASCADE')
        ontimeupdate('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
