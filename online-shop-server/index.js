const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/online-shop-test');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   if (req.headers.authorization && req.headers.authorization === 'true-token') {
//     next();
//   } else {
//     const error = new Error('Token is requered');
//     error.statusCode = 401;
//     next(error);
//   }
// });

app.use(routes);


app.use(function (req, res) {
  res.send('404 page not found')  
})


app.use(function (err, req, res, next) {
   res
   .status(err.statusCode || 500)
   .json({message: err.message})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))