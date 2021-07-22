const router = require("express").Router();
// const path = require("path");
const drinkRoutes = require("./drinks");

const songRoutes = require("./songs");
const userRoutes = require("./users");

router.use('/drinks', drinkRoutes);
router.use('/songs', songRoutes);
router.use('/users', userRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });
  

module.exports = router;