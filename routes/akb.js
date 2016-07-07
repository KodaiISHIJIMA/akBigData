var express = require('express');
var router = express.Router();
 
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./akBigData.sqlite');

/* GET helo page. */
router.get('/', function(req, res, next) {
  db.serialize(function(){
    db.all("select ranking, eighth_final_votes, seventh_final_votes, sixth_final_votes, fifth_final_votes, fourth_final_votes, third_final_votes, second_final_votes, first_final_votes from sousenkyo where cast(ranking as BIGINT) <= 30", function(err, results) {
          console.log(results);
          console.log(err);
          res.render('akb',{
          title: 'akb',
          results: results
      });
    });
  });
});
 
module.exports = router;

// select * from eighthFinal inner join eighthFirst on eighthFinal.ranking = eighthFirst.ranking;
// SELECT ranking, votes FROM eighthFinal
// select ranking, eighth_final_votes, seventh_final_votes, sixth_final_votes, fifth_final_votes, fourth_final_votes, third_final_votes, second_final_votes, first_final_votes from sousenkyo where cast(ranking as BIGINT) <= 30