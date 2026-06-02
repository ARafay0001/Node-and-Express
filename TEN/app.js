const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res, next) => {
  res.send('<a href="/add-home"> ADD Home </a>');
})
app.use(express.urlencoded())
app.get('/add-home', (req, res, next) => {
  res.send(`
<h1> Register your home here: </h1>
<form action="/add-home" method="POST">
<input type="text" name="houseName"
placeholder="Enter the name of your house" />
<input type="submit" />
</form>`)
})
app.post('/add-home', (req, res, next) => {
  console.log(req.body);
  res.send(`
<h1> Register Sucessfully </h1>
`)
})

app.listen(3000);