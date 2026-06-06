const express = require('express')
const userRouter = express.Router();
const path = require('path')
const rootDir = require('../utils/path')
const {registeredhouseName}= require('./hostRouter')

userRouter.get('/', (req, res, next) => {
  // console.log(registeredhouseName);
  // res.sendFile(path.join(rootDir, 'views', 'home.html'))
  // console.log(registeredhouseName)
  res.render('home', {registeredhouseName: registeredhouseName})
})

module.exports = userRouter