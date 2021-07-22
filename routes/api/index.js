const router = require("express").Router();
// const path = require("path");
const drinkRoutes = require("./drinks");
const userRoutes = require("./users");
// const moodRoutes = require("./mood");


router.use('/drinks', drinkRoutes);
router.use('/users', userRoutes);
// router.use('/moods', moodRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });
  

module.exports = router;