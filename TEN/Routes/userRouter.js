const express = require('express')
const userRouter = express.Router();


userRouter.get('/', (req, res, next) => {
  res.send('<a href="/host/add-home"> ADD Home </a>');
})

module.exports = userRouter