/* GET log */
const getLog = function (req, res) {
  res.render('log', { title: 'MEANIE Logger' });
};

/* PUT log */
const putLog = function (req, res) {
  res.render('log', { title: 'MEANIE Logger' });
};



module.exports = {
    getLog,
    putLog
};
