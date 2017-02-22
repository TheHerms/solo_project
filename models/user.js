
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  googleId: String,
  googleToken: String,
  googleEmail: String,
  googleName: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
