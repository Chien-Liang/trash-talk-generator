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
const indexRouter = require('./controllers/indexRouter')
app.get('/', indexRouter.getIndex)
app.post('/', indexRouter.postIndex)

/* Server */
app.listen(3000, () =>
  console.log('The server is connecting to http://localhost:3000')
)
