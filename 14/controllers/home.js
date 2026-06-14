
const { log } = require('console')
const houseModule = require('../modules/home')
const fs = require('fs')

exports.addhome = (req, res, next) => {
  res.render('form')}

exports.registered = (req, res, next) => {
  // registeredhouseName.push(req.body);
  // console.log(registeredhouseName);
const home = new houseModule(req.body.houseName, req.body.price, req.body.location)
  home.save()
  res.render('registered');
}

exports.gohome = (req, res, next) => {
  // console.log(registeredhouseName);
  // res.sendFile(path.join(rootDir, 'views', 'home.html'))
  // console.log(registeredhouseName)
  const registeredhouseName = houseModule.fetchAll(registeredhouseName => {
    res.render('home', {registeredhouseName: registeredhouseName}
    )})
}
  
exports.homedetail = (req, res, next) => {
  const homeid = req.params.id;

  houseModule.findById(homeid, home => {
    if (!home) {
      console.log("home not found ");
    } else {
      res.render('homedetails', {
        home: home,
      }
      )
    }

  })
    
}