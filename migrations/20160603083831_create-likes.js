exports.up = function (knex, Promise) {
  console.log('Creating likes')
  return knex.schema.createTableIfNotExists('likes', function (table) {
    table.increments('id').primary()
    table.string('likes')
      // if creating a foreign key
      // table.integer('sundae.id').references('sundaes.id')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping likes')
  return knex.schema.dropTableIfExists('likes').then(function () {
    console.log('likes table was dropped')
  })
}
