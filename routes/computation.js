var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    x=0
  if(req.query.x === undefined){
    x = Math.random(7);
  }else{
    x = req.query.x;
  }

  pow = Math.pow(x);

   
  res.send("pow applied to " + x + " is " + pow+ );
});

module.exports = router;