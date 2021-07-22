// //get by id
// const express = require("express");
// // const db = require("../models/drinks");
// const mongojs = require("mongojs");

// app.get("/api/drinks/find/:id", (req, res) => {
//   db.User_db.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id),
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

const router = require("express").Router();
const drinkController = require("../../controllers/drinksController")

//Matches with '/api/drinks'
router.route("/")
.get(drinkController.findAll)
.post(drinkController.create);

//Matches with '/api/drinks/:category'
router.route("/:category")
.get(drinkController.findByCategory)
.put(drinkController.update)
.delete(drinkController.remove)

module.exports = router;

// router.post('/', async (req,res) => {
//   try {
//     const newDrink = await 
//   }
// })