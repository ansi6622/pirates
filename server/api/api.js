var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

function Pirates(pirates){
  return knex('pirates')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Pirates().select().then(function(pirates){
    res.json(pirates);
  })
});

router.post('/create', function(req, res, next){
  Pirates().insert({name: req.body.name, poison: req.body.poison, accessory: req.body.accessory, image_url: req.body.image_url}).then(function(){
    console.log('resinatin on the station to station');
    res.end();
  }
  )
})


module.exports = router;
