const router = require("express").Router();
const drinkRoutes = require("./drinks");
// const moodRoutes = require("./mood");


router.use('/drinks', drinkRoutes);
// router.use('/moods', moodRoutes);

module.exports = router;