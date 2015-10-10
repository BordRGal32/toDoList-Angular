/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
// var mongo = require('mongodb');
var db = mongoose.connection;


db.on('error', console.error);
mongoose.connect('localhost:27017/toDoList-Angular');

// define model
var toDo = mongoose.model('Todo', {
    text : String
});


router.get('/todos', function(req, res) {
    toDo.find(function(err, tasks) {
        if(err) res.send(err);
        res.json(tasks);

    });
});


router.post('/todos', function(req, res) {
    toDo.create({
        text : req.body.text,
        done : false
    }, function(err) {
        if (err) res.send(err);

        toDo.find(function(err, tasks) {
            if(err) res.send(err);
            res.json(tasks);
        });
    });
});

router.delete('/todos/:todo_id', function(req, res) {
    toDo.remove({
        _id : req.params.todo_id
    }, function(err) {
        if(err) res.send(err);

        toDo.find(function(err, tasks) {
            if(err) res.send(err);
            res.json(tasks);
        });
    });
});

module.exports = router;
