const path = require('path')
const express = require('express')
const hostRouter = express.Router();
const rootDir = require('../utils/path')


const app = express()

hostRouter.get('/add-home', (req, res, next) => {
  res.render('form')
})

const registeredhouseName = []
hostRouter.post('/add-home', (req, res, next) => {
  
  registeredhouseName.push(req.body);
  // console.log(registeredhouseName);

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Success</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen flex items-center justify-center">

  <div class="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">

    <div class="text-green-500 text-5xl mb-4">
      ✔
    </div>

    <h1 class="text-2xl font-bold text-gray-800 mb-2">
      Registration Successful
    </h1>

    <p class="text-gray-500 mb-6">
      Your home has been added successfully.
    </p>

    <a href="/"
      class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
    >
      Go Back Home
    </a>

  </div>

</body>
</html>
  `);

});

exports.hostRouter = hostRouter
exports.registeredhouseName = registeredhouseName
