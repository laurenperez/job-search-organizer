var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();


//reference schema in models to know what your data looks like

router.get('/', function(req, res, next) {
  //just to check that the route is being hit
  console.log('Im in the /jobs route')
  //this is finding all jobs "documents" from the noSQL database
  Job.find({}, function (err, jobs){
    if (err) return console.log('err');
    res.send(jobs);
  });
});



module.exports = router;
