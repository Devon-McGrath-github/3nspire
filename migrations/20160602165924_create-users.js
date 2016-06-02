exports.up = function (knex, Promise) {
  console.log('Creating users')
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary()
    table.string('firstName')
    table.string('lastName')
    table.string('username')
      // if creating a foreign key
      // table.integer('sundae.id').references('sundaes.id')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping users')
  return knex.schema.dropTableIfExists('users').then(function () {
    console.log('users table was dropped')
  })
}
