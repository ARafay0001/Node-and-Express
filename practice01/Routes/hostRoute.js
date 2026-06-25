const express = require('express')
const hostRouter = express.Router();

const homeController = require('../Controllers/homeCOntroller')




hostRouter.get('/', homeController.homepage)
hostRouter.get('/form', homeController.formpage)
hostRouter.post('/', homeController.homepage)


exports.hostRouter = hostRouter
