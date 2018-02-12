var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Route: Home page */
router.get('/', ctrlMain.index);

module.exports = router;
