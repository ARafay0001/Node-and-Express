const express = require('express');
const app = express();
const { hostRouter } = require('./Routes/hostRoute');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.use(hostRouter);

// app.use('/',(req, res, next) => {
//   console.log(req.body);
//   next();
// });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});