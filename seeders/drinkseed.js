let mongoose = require("mongoose");
let db = require("../models");
// edit end of next line 
mongoose.connect("mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let drinkSeed = [
    {
      
      drink: [
        {
            alcoholic: "true",
            name: "Michelada",
            category: "beer",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Michelada_2.jpg/440px-Michelada_2.jpg",
            url: "https://en.wikipedia.org/wiki/Michelada",
             
          
        }
      ]
    },
];


db.Drinks.deleteMany({})
  .then(() => db.Drinks.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });