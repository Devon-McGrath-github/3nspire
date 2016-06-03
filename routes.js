var config = require('./knexfile.js')
var knex = require('knex')(config.development)


module.exports = {
  home: home,
  create: create,
  addUser: addUser,
  addData: addData,
  user: user,
  del: del
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

function user(req, res) {
  var user_id = req.body.userID
  knex.select()
    .table('users')
    .where({
      id: user_id
    })
    .then(function (data) {
      var model = {
        layout: 'main',
        users: data
      }
      res.render('user', model)
    })
}

function create(req, res) {
  var model = {
    layout: 'main'
  }
  res.render('create', model)

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
        users: data,
        layout: 'main'
      }
      res.render('index', model)
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
      res.redirect('index', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function del(req, res) {
  var rowID = req.body.rowID
  console.log(rowID);
  knex('users')
    .where('id', rowID)
    .del()
    .then(function () {
      console.log('you dont console log');
    })
    .catch(function (error) {
      console.log(error);
    })
}
