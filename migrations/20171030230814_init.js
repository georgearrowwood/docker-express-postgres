
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('uid').primary();
    table.string('username');
    table.string('name');
    table.string('email');
    table.timestamps();
  })
    .then(() => {
      return knex('users').insert({
        username: 'ab',
        name: 'abc',
        email: 'abcd'
      })
    });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
  ])
};
