'use strict'

var express     = require('express');
var bodyParser  = require('body-parser');
//var controller  = require('./controller/index.js');
//var routes      = require('./routes/index.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  // Setting the headers
  next();
});

app.use((req, res, next) => {
  // Displaying the request in the console.
  console.info(`[${req.method}] ${req.originalUrl}`);

  req.on('finish', () => {
    console.info(`[REQUEST END]: Status: ${res.status}; Content-Length:  ${res.get('Content-Length') || 0} b sent.`);
  });

  next();
});


// Routes

app.get('/', (req,res) => {
  res.json({
    message: 'You have requested the logger service!',
    version:'0.0.1'
  });
});


module.exports = { app }
