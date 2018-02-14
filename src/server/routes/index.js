var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlLog = require('../controllers/log');
var ctrlLogStats = require('../controllers/logStats');

/* Route: Home page */
router.get('/', ctrlMain.index);

/* Route: GET / PUT Logging */
router.get('/log', ctrlLog.getLog);
router.put('/log', ctrlLog.putLog);

/* Route: GET Logging Statistics */
router.get('/logStats', ctrlLogStats.getStats);

module.exports = router;
