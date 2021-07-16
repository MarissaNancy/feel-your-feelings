let mongoose = require("mongoose");
let db = require("../models");
// edit end of next line 
mongoose.connect("mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let songSeed = [
    {
      
      song: [
        {
            name: "Tiny Dancer",
            artist: "Elton John",
            url: "https://youtu.be/yYcyacLRPNs",
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Elton_John_2011_Shankbone_2_%28cropped%29.JPG/440px-Elton_John_2011_Shankbone_2_%28cropped%29.JPG"
          
        }
      ]
    },
];


db.Song.deleteMany({})
  .then(() => db.Song.collection.insertMany(songSeed))
  .then(data => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });