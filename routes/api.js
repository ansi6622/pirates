var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);
function Pirates(pirates){
  return knex('pirates')
}

/* GET home page. */
router.get('/api/pirates', function(req, res, next) {
  Pirates().select().then(function(pirates){
    res.json(pirates);
  })
});


module.exports = router;
