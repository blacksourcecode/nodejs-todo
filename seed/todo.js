// import model
var Todo = require('../models/Todo');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/todoapp');

var todo = [
    new Todo({
        todo: 'Look at MEAN Stack'
    }),
    new Todo({
        todo: 'Look at Phonegab nodejs setup '
    }),
    new Todo({
        todo: 'Restructer style.css and Setup up sass'
    }),
    new Todo({
        todo: 'Look at handlebars pagination'
    }),
    new Todo({
        todo: 'Look at Cheerio return empty string'
    })

];

var done = 0;

for(var i = 0; i < todo.length; i++){
    todo[i].save(function(err, result){
        done++;
        if(done === todo.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

