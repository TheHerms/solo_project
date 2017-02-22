var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var Favorite = require('../../models/favoriteModel');

router.get('/', function (req, res) {
  console.log('here get');
  Favorite.find({ "googleEmail": req.user.googleEmail }, function (err, favorites){
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log('favorites', favorites);
    res.send(favorites);
  });
});

router.post('/', function (req, res) {
  console.log('post req.body:', req.body);
  console.log('post req.body:', req.user._id);

  var favorite = new Favorite();
  favorite.googleEmail = req.user.googleEmail;
  // req.body.googleEmail = req.user.googleEmail;
  var courseName = req.body.courseName;
  var review = req.body.review;
  var pros = req.body.pros;
  var cons = req.body.cons;
  var favoriteArray = new Array();
  favoriteArray.push({'courseName': courseName, 'review': review, 'pros': pros, 'cons': cons});
  console.log('favoriteArray', favoriteArray);
  favorite.favorites = favoriteArray;

  favorite.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

module.exports = router;
