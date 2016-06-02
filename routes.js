var config = require('./knexfile.js')
var knex = require('knex')(config.development)


module.exports = {
  home: home

}

function home(req, res) {
  knex.select()
    .table('users')
    .then(function (data) {
      var model = {
        layout: 'main',
        users: data
      }
      res.render('index', model)
    })
}
