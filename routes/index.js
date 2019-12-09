const express = require('express');
const router = express.Router();

var entry = {
  word: "word",
  definition: "definition",
  date: 0,
  etymology: "etymology"
};

router.get('/', function(req, res) {
  res.render('index', { entry });
});

router.post('/', function(req, res) {
  res.redirect('/word/' + req.body.word);
});

module.exports = router;