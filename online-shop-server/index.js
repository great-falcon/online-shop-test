const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/online-shop-test');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

