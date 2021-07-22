const db = require("../models/");

module.exports = {
findAll: function(req, res){
    db.Drink
    .find(req, body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json(err)); 
},
findByCategory: function(req, res){
    db.Drink
    .find(req.param.category)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json(err)); 
},
create: function(req,res){
    db.Drink
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json(err)); 
},
update: function(req,res){
    db.Drink
    .findOneAndUpdate({category: req.params.category}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json(err)); 
},
remove: function(req,res){
    db.Drink
    .findByCategory({ category: req.params.category})
    .thn(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json(err)); 
}
};