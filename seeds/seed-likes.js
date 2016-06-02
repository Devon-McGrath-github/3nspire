exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('likes').del(),

    // Inserts seed entries
    knex('likes').insert({}),
    knex('likes').insert({}),
    knex('likes').insert({})
  );
};
