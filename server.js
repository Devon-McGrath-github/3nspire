var hbs = require('express-handlebars')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()

var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  urlencoded: true
}))
app.use(express.static('public'))
app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', routes.home)
app.get('/contacts', routes.contacts)
app.get('/about', routes.about)
app.get('/github', routes.github)

app.get('/create', routes.create)

app.post('/user', routes.user)

app.post('/add', routes.addUser)

app.post('/addData', routes.addData)
app.post('/del', routes.del)
app.post('/update', routes.update)
app.post('/getLikes', routes.getLikes)

app.listen(PORT, function () {
  console.log('Listening for aliens on port: ', PORT);
})
