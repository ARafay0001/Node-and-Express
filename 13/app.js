const path = require('path')

const express = require('express')
// const bodyParser = require('body-parser')

const userRouter = require('./Routes/userRouter')
const {hostRouter} = require('./Routes/hostRouter')
const rootDir = require('./utils/path')
const errorController = require('./controllers/errors')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(rootDir, 'public')))

app.use(userRouter)

app.use(express.urlencoded({ extended: false }));

app.use('/host',hostRouter)

app.use(errorController.pageNotFound)


app.listen(3000);