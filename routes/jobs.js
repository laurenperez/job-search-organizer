var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();


//reference schema in models to know what your data looks like

router.get('/', function(req, res, next) {

      // Job.create({
      //   title: 'Junior web developer',
      //   companyName: 'Google',
      //   location: 'Kirkland',
      //   keyWords: 'html, js, css, bootstrap',
      //   jobSource: 'friend',
      //   jobURL: 'https://www.indeed.com/',
      //   postedSalary: 70000,
      //   expectedSalary: 60000,
      //   applicationDate: '10-16-2017',
      //   contact: {
      //     email: 'me@gmail.com',
      //     phone: '423-555-555',
      //     name: 'Veronika',
      //   },
      //   interview: {
      //     phoneDate: '10-5-2017',
      //     phoneNotes: 'Was great, follow up with Veronika in a week',
      //     phoneStatus: 'pass',
      //     personDate: '11-20-2017',
      //     personNotes: '',
      //     personStatus: 'scheduled', 
      //   }
      // }, function(err, job){
      //     if(err) return console.log(err)
      //     res.send(job);
      // })
  // just to check that the route is being hit
  console.log('Im in the /jobs route')
  // this is finding all jobs "documents" from the noSQL database
  Job.find({}, function (err, jobs){
    if (err) return console.log('err');
    res.send(jobs);
  });
});



module.exports = router;
