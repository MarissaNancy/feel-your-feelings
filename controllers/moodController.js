const db = require("../models");

module.exports = {
    findByCategory: function(req, res) {
      db.users.findByCategory(req.params.category)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    },
  };