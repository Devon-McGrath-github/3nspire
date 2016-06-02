var knex = require('knex')
var config = require('./knexfile')

module.exports = {

}

function = getConnection() {
  return knex(config.development)
}
