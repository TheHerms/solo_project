
var mongoose = require('mongoose');


var favoriteArray = mongoose.Schema({courseName: String,
review: String,
pros: String,
cons: String
});

var favoriteSchema = mongoose.Schema({
  googleEmail: String,
  favorites: [favoriteArray]
});

var Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
