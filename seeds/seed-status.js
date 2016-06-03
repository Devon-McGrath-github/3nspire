exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('status').del(),

    // Inserts seed entries
    knex('status').insert({
      status: 'Im pretty happy today',
      user_id: 1
    }),
    knex('status').insert({
      status: 'Im very happy today',
      user_id: 2
    }),
    knex('status').insert({
      status: 'Im extatic today',
      user_id: 3
    })
  );
};
