const express = require('express');
const router = express.Router();
const User = require('../models/model01');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps API', key: process.env.MAP_KEY});
});

module.exports = router;
