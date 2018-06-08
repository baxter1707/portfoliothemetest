const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const sass = require('node-sass');
app.set('view engine', 'mustache')
app.engine('mustache', mustacheExpress())
app.set('views', './views')


app.get('/', (req,res) => {
  res.render('./home')
})

app.listen(8000,  () => {
  console.log('Example app listening on port 8000!')
})
