var Favorite = require('../models/bucketModel');

var BucketService = {
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

  createBL: function (googleEmail, courseName, location, date) {
    var bucket = new Bucket();


    bucket.save(function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, bucket);
    });
  },
};

module.exports = UserService;
