const express = require('express')
const app = express()
app.use(express.static('public'))
const exhbs = require('express-handlebars')

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () =>
  console.log('The server is connecting to http://localhost:3000')
)
