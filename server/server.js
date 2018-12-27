// my app server side
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// logging middleware
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json())
// app.use(express.urlencoded({ extended: true })) this and no bodyParser import??

// routes: mount your api routes to one location
app.use('/api', require('./api'));

// after all routes send index.html
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// handles 500 errors - always last
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
