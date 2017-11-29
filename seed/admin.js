// import model
var User = require('../models/User');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/todoapp');

var user = [
    new User({
        email: 'admin@wiredelta.com',
        password: '$2a$05$cfxyPUbGkSnVZ6b3SYVV7eTRtnEIRD0Wcp4pzO/hIcH1mf5ZZDSGm'
    }),
    new User({
        email: 'admin@admin.com',
        password: '$2a$05$cfxyPUbGkSnVZ6b3SYVV7eTRtnEIRD0Wcp4pzO/hIcH1mf5ZZDSGm'
    })
];

var done = 0;

for(var i = 0; i < user.length; i++){
    user[i].save(function(err, result){
        done++;
        if(done === user.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

