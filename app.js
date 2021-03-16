/* Packages */
const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

/* Middlewares */
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/* Router */
const indexCtrl = require('./controllers/indexController')
app.get('/', indexCtrl.getIndex)
app.post('/', indexCtrl.postSelection)

/* Server */
app.listen(3000, () =>
  console.log('The server is connecting to http://localhost:3000')
)
