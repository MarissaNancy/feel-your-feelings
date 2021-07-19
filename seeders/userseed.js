let mongoose = require("mongoose");
let db = require("../models");
// edit end of next line 
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let userSeed = [
    {
      
      user: [
        {
            name: "OMGuser",
            email: "cool@gmail.com",
            password: "Awesome2021",
            
        }
      ]
    },
];


db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });