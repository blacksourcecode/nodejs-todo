var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');


module.exports.controller = function(router) {

/**
 * a home page route
 */

  router.get('/', function(req, res) {
    Todo.find({}).exec(function(err, doc){
        if(err){
            res.send('error has occured');
        } else{
            doc.reverse();
            res.render('home/index', {doc, title: 'Todo'});
        }
    });
});

  router.post('/todo', function(req, res){
    var newTodo = new Todo();

    newTodo.todo = req.body.todo;

    newTodo.save(function(err, doc){
        if(err){
            res.send('error creating Todo');
        } else {
            console.log(doc);
            res.redirect('/');
        }
    });
});

    // look into mongoose delete and put method
    router.post('/todo/delete/:id', function(req, res){
      var id = req.params.id;
      
      Todo.findByIdAndRemove({_id: req.params.id}, function(err, todo){
          if(err){
              res.send('error deleting todo');
          } else {
              console.log('Todo ID: ' + id + ' is deleted');
              res.redirect('/');
          }
      });
  });

}