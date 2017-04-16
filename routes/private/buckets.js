var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var Bucket = require('../../models/bucketModel');
// var Favorite = require('../../models/bucketModel');

router.get('/', function (req, res) {
  console.log('here get');
  Bucket.find({ "googleEmail": req.user.googleEmail }, function (err, buckets){
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log('buckets', buckets);
    res.send(buckets);
  });
});

router.post('/', function (req, res) {
  console.log('post req.body:', req.body);
  console.log('post req.body:', req.user._id);

  var bucket = new Bucket();
  bucket.googleEmail = req.user.googleEmail;
  // req.body.googleEmail = req.user.googleEmail;
  var courseName = req.body.courseName;
  var location = req.body.location;
  var date = req.body.date;

  var bucketArray = new Array();
  bucketArray.push({'courseName': courseName, 'location': location, 'date': date});
  console.log('bucketArray', bucketArray);
  bucket.buckets = bucketArray;

  bucket.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

module.exports = router;
