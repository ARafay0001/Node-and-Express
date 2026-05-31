

//external module
const express = require('express')

const app = express()


//sytaxt of app.use 
//app.use('path', (req, res, next) => {})


app.use('/', (req, res, next) => {
  console.log('came from first middle ware', req.url, req.method)
  next()
})

app.use('/next', (req, res, next) => {

  console.log('came from second middle ware', req.url, req.method)
  res.send('<p>welcome expess</p>')
})



// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1>test</h1>')
// });
const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server running on address http://localhost: ${PORT}`)
});