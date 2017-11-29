var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');


module.exports.controller = function(router) {

/**
 * a home page route
 */
router.get('/intro/index', function(req, res) {
     res.render('intro/index');
  });
}