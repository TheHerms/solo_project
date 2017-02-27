
var mongoose = require('mongoose');


var bucketArray = mongoose.Schema({courseName: String,
location: String,
whenToGo: String});

var bucketSchema = mongoose.Schema({
  googleEmail: String,
  buckets: [bucketArray]
});

var Bucket = mongoose.model('Bucket', bucketSchema);

module.exports = Bucket;
