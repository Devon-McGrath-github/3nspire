exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries

    // knex('likesTBL').del(),

    // Inserts seed entries
    knex('likesTBL').insert({
      like: 'soccer',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'tennis',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'soccer',
      user_id: 3
    }),
    knex('likesTBL').insert({
      like: 'baseball',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'soccer',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'tennis',
      user_id: 3
    })
  );
};
