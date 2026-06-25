const express = require('express');
const app = express();


const data = []
exports.homepage = (req, res, next) => {
  console.log('rendering home');
  res.render('home', {data} )
  data.push(req.body)
  console.log('pushing req.body into data', data);

};

exports.formpage = (req, res, next) => {
  console.log('rendering form', );
  res.render('form')
};