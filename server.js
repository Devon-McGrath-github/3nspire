var hbs = require('express-handlebars')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()

var PORT = process.env.PORT || 3000

app.get('/', routes.home)


app.use(bodyParser.urlencoded({
  urlencoded: true
}))
app.use(express.static('public'))
app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, function () {
  console.log('Listening for aliens on port: ', PORT);
})
