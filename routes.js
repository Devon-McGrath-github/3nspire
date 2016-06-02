var config = require('./knexfile.js')
var knex = require('knex')(config.development)


module.exports = {
  home: home
}

function home(req, res) {
  var model = {
    layout: 'main',
    title: '3snpire'
  }
  res.render('index', model)
}
