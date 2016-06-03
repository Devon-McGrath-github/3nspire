exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries

    knex('likesTBL').del(),

    // Inserts seed entries
    knex('likesTBL').insert({
      like: 'Colourful Shirts',
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
    }),
    knex('likesTBL').insert({
      like: 'hockey',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'baseball',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'cheese',
      user_id: 3
    }),
    knex('likesTBL').insert({
      like: 'Daisy',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'Computers',
      user_id: 3
    }),
    knex('likesTBL').insert({
      like: 'Rugby',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'soccer',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'Lasagne',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'Cats',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'Italy',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'Knitting',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'Cars',
      user_id: 3
    }),
    knex('likesTBL').insert({
      like: 'Music',
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
      like: 'Lacrosse',
      user_id: 1
    }),
    knex('likesTBL').insert({
      like: 'American Football',
      user_id: 2
    }),
    knex('likesTBL').insert({
      like: 'Beanbags',
      user_id: 3
    })
  );
};
