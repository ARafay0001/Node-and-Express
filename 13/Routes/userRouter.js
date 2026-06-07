const express = require('express')
const userRouter = express.Router();
const path = require('path')
const rootDir = require('../utils/path')

const {gohome} = require('../controllers/home')

userRouter.get('/', gohome )

module.exports = userRouter