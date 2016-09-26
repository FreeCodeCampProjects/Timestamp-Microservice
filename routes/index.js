/* Node modules:
 *************************************************************/

var express = require('express');
var router = express.Router();


/* Module for converting unix time format to natural format:
 *************************************************************/

var unixToNatural = require('../public/javascripts/unixToNatural');


/* Root route renders the 'index' Jade view:
 *************************************************************/

router.get('/', function(req, res, next) {
  res.render('index');
});


/* Time parameter is processed and returned in an 
   appropriate format:
 *************************************************************/

router.get('/:time', function(req, res) {
  if (!isNaN(req.params.time)) {
    var result = unixToNatural(req.params.time);
    var data = { unix: req.params.time, natural: result };
    res.json(data);
  } else {
    var natural = new Date(req.params.time);
    if (!isNaN(natural)) {
      var unix = natural / 1000;
      var data = { unix: unix, natural: req.params.time };
      res.json(data);
    } else {
      res.json({ unix: null, natural: null });
    }
  }
});

module.exports = router;