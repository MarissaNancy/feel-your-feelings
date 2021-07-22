const db = require("../models");

module.exports = {
findById: function(req, res) {
    db.Drink
    .findById(res.params.id)
    .then(dbDrink => res.json(dbDrink))
    .catch(err => res.status(400).json(err));
},
findById: function(req, res) {
    db.Food
    .findById(res.params.id)
    .then(dbFood => res.json(dbFood))
    .catch(err => res.status(400).json(err));
},
findById: function(req, res) {
    db.Song
    .findById(res.params.id)
    .then(dbSong => res.json(dbSong))
    .catch(err => res.status(400).json(err));
}

};