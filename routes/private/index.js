var express = require('express');
var router  = express.Router();
var favorites = require('./favorites');
var buckets = require('./buckets');
/** ---------- SUBROUTES ---------- **/
router.use('/favorites', favorites);
router.use('/buckets', buckets);
/**
 * GET private/index
 */
router.get('/', function (req, res) {
  res.redirect('/'); // they made it!
});

module.exports = router;
