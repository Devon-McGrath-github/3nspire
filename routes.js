var config = require('./knexfile.js')
var knex = require('knex')(config.development)


module.exports = {
  home: home,
  create: create,
  addUser: addUser,
  addData: addData
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

function create(req, res) {
  res.render('create')

}

function addUser(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username

  knex('users')
    .insert({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {})
    .catch(function (error) {
      console.error(error)
    })


  knex('users')
    .then(function (data) {
      var model = {
        users: data
      }
      res.render('add', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

// insert({
//     username: uName,
//     firstName: fName,
//     lastName: lName
//   })
//   .into('users')
//   .then(function () {
//     console.log('testing add user')
//     res.render('add')
//   })
//   .catch(function () {
//     console.log(err.message);
//   })

function addData(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  knex('users')
    .insert({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {})
    .catch(function (error) {
      console.error(error)
    })
  knex('users')
    .then(function (data) {
      var model = {
        users: data
      }
      res.render('addData', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}
