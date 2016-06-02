exports.up = function (knex, Promise) {
  console.log('Creating status')
  return knex.schema.createTableIfNotExists('status', function (table) {
    table.increments('id').primary()
    table.string('status')
    table.integer('user_id').references('users.id')
      // if creating a foreign key
      // table.integer('sundae.id').references('sundaes.id')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping status')
  return knex.schema.dropTableIfExists('status').then(function () {
    console.log('status table was dropped')
  })
}
