const express = require('express')

const app = express()


app.use((req, res, next) => {
 console.log('first dummy middleware', req.url, req.method)
 next()
})

app.use((req, res, next) => {
 console.log('Secind dummy middleware', req.url, req.method)
 next()
})

app.get('/',(req, res, next) => {
 res.send(`<p>response from third middleware go to <a href="http://localhost:3000/contact">contact</a></p> `)
})

app.get('/contact',(req, res, next) => {
 res.send(`<p>please give your details</p>
  <form action="/contact" method="post">
    <input type="text" name="name" placeholder="name"><br>
    <input type="email" name="email" id="" placeholder="email"><br>
    <input type="submit" >
  </form>
  `)
})

app.post('/contact', (req, res, next) => {
  res.send(`<p>response sent we will contact you shortly</p>`)
})


app.listen(3000)