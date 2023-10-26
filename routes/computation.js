var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  const x = parseFloat(req.query.x) || Math.round(Math.random()*10); 
  const y = Math.pow(x,x);

  res.send(`Math.pow() applied to ${x} is ${y}`);
});

module.exports = router;