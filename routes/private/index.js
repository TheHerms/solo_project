var express = require('express');
var router  = express.Router();
var favorites = require('./favorites');

/** ---------- SUBROUTES ---------- **/
router.use('/favorites', favorites);

/**
 * GET private/index
 */
router.get('/', function (req, res) {
  res.redirect('/'); // they made it!
});

module.exports = router;
