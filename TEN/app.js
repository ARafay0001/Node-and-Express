const express = require('express')
// const bodyParser = require('body-parser')

const userRouter = require('./Routes/userRouter')
const hostRouter = require('./Routes/hostRouter')

const app = express()


app.use(userRouter)

app.use(express.urlencoded())

app.use(hostRouter)

app.listen(3000);