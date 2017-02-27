var Favorite = require('../models/favoriteModel');

var FavoriteService = {
  // findUserById: function (id, callback) {
  //   User.findById(id, function (err, favorite) {
  //     if (err) {
  //       return callback(err, null);
  //     }
  //
  //     return callback(null, favorite);
  //   });
  // },
  //
  // findUserByGoogleId: function (id, callback) {
  //   User.findOne({ googleId: id }, function (err, favorite) {
  //
  //     if (err) {
  //       return callback(err, null);
  //     }
  //
  //     return callback(null, favorite);
  //   });
  // },

  createFavorites: function (googleEmail, courseName, location, courseType, courseLayout, highlight, courseConditions, price, value, recommend) {
    var favorite = new Favorite();


    favorite.save(function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, favorite);
    });
  },
};

module.exports = UserService;
