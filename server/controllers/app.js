const db = require('../modules/db');

const appController = {
  index: (req, res) => {
    db('users')
    .select()
    .then(dbres => {
      res.json({
        users: dbres,
      })  
    });
  },  
};

module.exports = appController;

