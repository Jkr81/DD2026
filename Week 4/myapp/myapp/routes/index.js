var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { 
    title: "Express",
    name: "Josh Rocha",
    image: "/images/house.jpg",
   });
});

module.exports = router;
