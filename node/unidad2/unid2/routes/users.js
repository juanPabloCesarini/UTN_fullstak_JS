var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('estoy en el login');
});

router.post('/register', function(req, res, next) {
  res.send('estoy en el register');
});

module.exports = router;
