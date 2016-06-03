var config = require('./knexfile.js')
var knex = require('knex')(config.development)


module.exports = {
  home: home,
  create: create,
  addUser: addUser,
  addData: addData,
  user: user,
  del: del,
  update: update,
  contacts: contacts,
  about: about,
  github: github,
  getLikes: getLikes
}

function home(req, res) {
  knex.select()
    .table('users')
    .then(function (data) {
      var model = {
        layout: 'main',
        users: data,
        title: 'Home'
      }
      res.render('index', model)
    })
}

function user(req, res) {
  var userIdentity = req.body.userID
  knex('users')
    // .table('users')
    .where({
      id: userIdentity
    })
    .then(function (data) {
      var model = {
        layout: 'main',
        users: data,
        title: 'User Info'
      }
      res.render('user', model)
    })
}

function create(req, res) {
  var model = {
    layout: 'main',
    title: 'Create New'
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
        layout: 'main',
        title: 'Add New'
      }
      res.render('index', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

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
    .then(function (response) {
      res.redirect('index')
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

function update(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  var userID = Number(req.body.userId)
  knex('users')
    .where({
      id: userID
    })
    .update({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {
      // res.redirect('index')
    })
    .catch(function (error) {
      console.log(error);
    })
}

function contacts(req, res) {
  var model = {
    layout: 'main',
    title: 'Contacts'
  }
  res.render('contact', model)
}

function about(req, res) {
  var model = {
    layout: 'main',
    title: 'About Us'
  }
  res.render('about', model)
}

function github(req, res) {
  var model = {
    layout: 'main',
    title: 'Github'
  }
  res.render('about', model)
}



function getLikes(req, res) {
  var userIdentity = Number(req.body.userId)
  knex('users')
    .join('likesTBL', 'users.id', '=', 'likesTBL.user_id')
    // .select('users.id', 'users.firstName', 'likesTBL.like')
    .where('users.id', userIdentity)
    .then(function (data) {
      var model = {
        layout: 'main',
        users: data,
        title: 'User Likes'
      }
      res.render('getLikes', model)
    })
    .catch(function (error) {
      console.log(error)
    })
}
