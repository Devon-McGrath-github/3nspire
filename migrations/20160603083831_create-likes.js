exports.up = function (knex, Promise) {

  console.log('Creating likesTBL')
  return knex.schema.createTableIfNotExists('likesTBL', function (table) {
    table.increments('id').primary()
    table.string('like')
    table.integer('user_id').references('users.id')
      // if creating a foreign key
      // table.integer('sundae.id').references('sundaes.id')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping likesTBL')
  return knex.schema.dropTableIfExists('likesTBL').then(function () {
    console.log('likesTBL table was dropped')
  })
}
