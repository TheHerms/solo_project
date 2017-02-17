var express = require('express');
var router = express.Router();
var Favorite = require('../../models/user')

router.get('/', function (req, res) {
  Favorite.find({ _id: req.user._id }, function (err, favorites){
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(favorites);
  });
});

router.post('/', function (req, res) {
  console.log('post req.body:', req.body);
  // var userFavoriteCourse = req.body;
  var user = req.user;
  favorites.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  }
)
});

module.exports = router;
