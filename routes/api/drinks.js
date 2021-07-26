
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

