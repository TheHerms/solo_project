
var mongoose = require('mongoose');


var favoriteArray = mongoose.Schema({courseName: String,
location: String,
courseType: String,
courseLayout: String,
highlight: String,
courseConditions: String,
price: String,
value: String,
recommend: String
});

var favoriteSchema = mongoose.Schema({
  googleEmail: String,
  favorites: [favoriteArray]
});

var Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
