let mongoose = require("mongoose");
let db = require("../models");
// edit end of next line 
mongoose.connect("mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let foodSeed = [
    {
      
      drink: [
        {
            type: "dinner",
            name: "pepper steak",
            url: "https://en.wikipedia.org/wiki/Pepper_steak",
             
          
        }
      ]
    },
];


db.Food.deleteMany({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });