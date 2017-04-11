var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var Tournament = require('../../models/tournamentModel');
// var Favorite = require('../../models/tournamentModel');

router.get('/', function (req, res) {
  console.log('here get');
  Tournament.find({ "googleEmail": req.user.googleEmail }, function (err, tournaments){
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log('tournaments', tournaments);
    res.send(tournaments);
  });
});

router.post('/', function (req, res) {
  console.log('post req.body:', req.body);
  console.log('post req.body:', req.user._id);

  var tournament = new Tournament();
  tournament.googleEmail = req.user.googleEmail;
  // req.body.googleEmail = req.user.googleEmail;
  var tournamentName = req.body.tournamentName;
  var courseName = req.body.courseName;
  var location = req.body.location;
  var date = req.body.date;

  var tournamentArray = new Array();
  tournamentArray.push({'tournamentName': tournamentName, 'courseName': courseName, 'location': location, 'date': date});
  console.log('tournamentArray', tournamentArray);
  tournament.tournaments = tournamentArray;

  tournament.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

module.exports = router;
