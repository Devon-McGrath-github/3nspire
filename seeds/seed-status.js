exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('status').del(),

    // Inserts seed entries
    knex('status').insert({
      status: 'Im pretty happy today',
      user_id: 10
    }),
    knex('status').insert({
      status: 'Im pretty happy today2',
      user_id: 11
    }),
    knex('status').insert({
      status: 'Im pretty happy today3',
      user_id: 12
    })
  );
};
