const router = require("express").Router();
const songsController = require("../../controllers/songsControllers")

//Matches with '/api/drinks'
router.route("/")
.get(songsController.findAll)
.post(songsController.create);

//Matches with '/api/drinks/:category'
router.route("/:category")
.get(songsController.findByCategory)
.put(songsController.update)
.delete(songsController.remove)

module.exports = router;

