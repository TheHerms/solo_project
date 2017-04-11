
var mongoose = require('mongoose');


var tournamentArray = mongoose.Schema({
tournamentName: String,
courseName: String,
location: String,
date: String});

var tournamentSchema = mongoose.Schema({
  googleEmail: String,
  tournaments: [tournamentArray]
});

var Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
