/*jslint node: true */
'use strict';

// app set up
var express = require('express');
var app = express();
// var mongoose = require('mongoose');
var mongo = require('mongodb');
// var db = mongoose.connection;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes/index');
var api = require('./routes/api');


// app configuration
// db.on('error', console.error);
// mongoose.connect('localhost:27017/toDoList-Angular');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/', routes);
app.use('/api', api);

// // define model
// var toDo = mongoose.model('Todo', {
//     text : String
// });




app.listen(8080);
console.log('listening on 8080');
