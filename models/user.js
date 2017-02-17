
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  googleId: String,
  googleToken: String,
  googleEmail: String,
  googleName: String,
  favorites: [{
    courseName: String,
    review: String,
    pros: String,
    cons: String,
  }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
