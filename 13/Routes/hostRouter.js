const path = require('path')
const express = require('express')
const hostRouter = express.Router();
const rootDir = require('../utils/path')

const home = require('../controllers/home')

hostRouter.get('/add-home', home.addhome)

hostRouter.post('/add-home', home.registered);

exports.hostRouter = hostRouter
