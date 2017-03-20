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
  var courseName = req.body.courseName;
  var location = req.body.location;
  var courseType = req.body.courseType;
  var courseLayout = req.body.courseLayout;
  var highlight = req.body.highlight;
  var courseConditions = req.body.courseConditions;
  var price = req.body.price;
  var value = req.body.value;
  var recommend = req.body.recommend;
  var favoriteArray = new Array();
  favoriteArray.push({'courseName': courseName, 'location': location, 'courseType': courseType, 'courseLayout': courseLayout, 'highlight': highlight, 'courseConditions': courseConditions,
  'price': price, 'value': value, 'recommend': recommend});
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
