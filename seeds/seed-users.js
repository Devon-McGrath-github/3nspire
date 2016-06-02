exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      firstName: 'Don',
      lastName: 'smith',
      username: 'TheSmithinator'
    }),
    knex('users').insert({
      firstName: 'Rich',
      lastName: 'Churcher',
      username: 'git '
    }),
    knex('users').insert({
      firstName: 'Timothy',
      lastName: 'Hawkins',
      username: 'usernametim'
    })
  );
};
