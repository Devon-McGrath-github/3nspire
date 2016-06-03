exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries

    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      firstName: 'Don',
      lastName: 'Smith',
      username: 'The Smithinator'
    }),
    knex('users').insert({
      firstName: 'Rich',
      lastName: 'Churcher',
      username: 'Git Meister'
    }),
    knex('users').insert({
      firstName: 'Dan',
      lastName: 'Druff',
      username: 'Druffy'
    }),
    knex('users').insert({
      firstName: 'Dick',
      lastName: 'Tator',
      username: 'Atila the Hun'
    }),
    knex('users').insert({
      firstName: 'Donny',
      lastName: 'Darko',
      username: 'Weirdo'
    }),
    knex('users').insert({
      firstName: 'Neil',
      lastName: 'Down',
      username: 'Low'
    }),
    knex('users').insert({
      firstName: 'Paige',
      lastName: 'Turner',
      username: 'Novel'
    }),
    knex('users').insert({
      firstName: 'Ray',
      lastName: 'Gun',
      username: 'Lazer'
    }),
    knex('users').insert({
      firstName: 'Tim',
      lastName: 'Burr',
      username: 'Falling'
    })
  );
};
