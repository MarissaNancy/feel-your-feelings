const router = require("express").Router();
const moodController = require("../../controllers/moodsControllers")

router
.route("/:id")
.get(moodController.findById);

module.exports = router;

