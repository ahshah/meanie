/* GET log Stats */
const getStats = function (req, res) {
  res.render('logStats', { title: 'MEANIE Logger Statistics' });
};


module.exports = {
    getStats
};
