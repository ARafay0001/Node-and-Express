//core module
const http = require('http');

//external module
const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('came from first middle ware', req.url, req.method)
  next()
})

app.use((req, res, next) => {

  console.log('came from second middle ware', req.url, req.method)
})




const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1>test</h1>')
// });
const PORT = 3000;

server.listen(PORT, () => {
console.log(`Server running on address http://localhost: ${PORT}`)
});