var Tournaments = require('../models/tournamentModel');

var TournamentService = {
  // findUserById: function (id, callback) {
  //   User.findById(id, function (err, bucket) {
  //     if (err) {
  //       return callback(err, null);
  //     }
  //
  //     return callback(null, bucket);
  //   });
  // },
  //
  // findUserByGoogleId: function (id, callback) {
  //   User.findOne({ googleId: id }, function (err, bucket) {
  //
  //     if (err) {
  //       return callback(err, null);
  //     }
  //
  //     return callback(null, bucket);
  //   });
  // },

  createTL: function (googleEmail, tournamentName, courseName, location, date, ) {
    var tournament = new Tournament();


    tournament.save(function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, bucket);
    });
  },
};

module.exports = UserService;
