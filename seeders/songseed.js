let mongoose = require("mongoose");
let db = require("../models");
const MONGO_URI = require("../config/keys").mongoURI;
// edit end of next line 
mongoose.connect(MONGO_URI || "mongodb://localhost/feelings", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

let songSeed = [
  {
        name: "Happy",
        artist: "Pharrell Williams",
        url: "",
        thumbnail: "",
        category: "Happy",
  },
  {
        name: "I Wanna Dance with Somebody (Who Love Me)",
        artist: "Whitney Houston",
        url: "",
        thumbnail: "",
        category: "Happy",
  },
  {
        name: "Tenderness",
        artist: "General Public",
        url: "",
        thumbnail: "",
        category: "Happy",
  },
  {

        name: "Valerie",
        artist: "Amy Winehouse",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        url: "",
        thumbnail: "",
        category: "Happy",
  },
  {

        name: "Lovely Day",
        artist: "Bill Withers",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {

        name: "Can’t Stop the Feeling!",
        artist: "Justin Timberlake",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {

        name: "Amber",
        artist: "311",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {

        name: "Peaches",
        artist: "Justin Biebar ft. Daniel Caesar",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {

        name: "Girl Just Want To Have Fun",
        artist: "Cyndi Lauper",
        url: "",
        thumbnail: "",
        category: "Happy",

  },
  {

        name: "Sunset Lover",
        artist: "Petit Biscuit",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {
 
        name: "Fix You",
        artist: "Coldplay",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {

        name: "Lonely",
        artist: "Justin Bb & Benny Blano",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {

        name: "Give me Love",
        artist: "Ed Sheeran",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {

        name: "Before You Go",
        artist: "Lewis Capaldi",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {
 
        name: "Wherever You Are",
        artist: "Kodaline",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {
 
        name: "Be Alright",
        artist: "Dean Lewis",
        url: "",
        thumbnail: "",
        category: "Moody",
 
  },
  {
 
        name: "Are You Happy?",
        artist: "SHY Martin",
        url: "",
        thumbnail: "",
        category: "Moody",
 
  },
  {

        name: "People Help The People",
        artist: "Birdy",
        url: "",
        thumbnail: "",
        category: "Moody",

  },
  {

        name: "Lost Boy",
        artist: "Ruth B",
        url: "",
        thumbnail: "",
        category: "Moody",
 
  },
  {

        name: "Holocene",
        artist: "Bon Iver",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Somewhere Only We Know",
        artist: "Keane",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Wake Me Up When September Ends",
        artist: "Greenday",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Superman (It’s not Easy)",
        artist: "Five for Fighting",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "One Last Breath",
        artist: "Creed",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Chasing Cars",
        artist: "Snow Patrol",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Shallow",
        artist: "Lady GaGa ft. Bradley Cooper",
        url: "",
        thumbnail: "",
        category: "Tired",
 
  },
  {

        name: "Grow As We Go",
        artist: "Ben Platt",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Demons",
        artist: "Jacob Lee",
        url: "",
        thumbnail: "",
        category: "Tired",

  },
  {

        name: "Keeping me Alive",
        artist: "Jonathan Roy",
        url: "",
        thumbnail: "",
        category: "Tired",
 
  },
  {

        name: "Gives you hell",
        artist: "All American Rejects",
        url: "",
        thumbnail: "",
        category: "Grumpy",
 
  },
  {
 
        name: "Don’t Worry Be Happy",
        artist: "Bobby McFerrin",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {

        name: "Crazy",
        artist: "Gnarls Barkley",
        url: "",
        thumbnail: "",
        category: "Grumpy",
 
  },
  {
 
        name: "Sitting, Waiting, Wishing",
        artist: "Jack Johnson",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {
 
        name: "We are never getting back together",
        artist: "Taylor Swift",
        url: "",
        thumbnail: "",
        category: "Grumpy",
 
  },
  {

        name: "So What",
        artist: "Pink",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {

        name: "Truth Hurts",
        artist: "Lizzo",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {

        name: "Bad Day",
        artist: "Daniel Powder",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {
  
        name: "You outta know",
        artist: "Alanis Morisette",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {
 
        name: "Live and Let Die",
        artist: "Guns ‘N’ Roses",
        url: "",
        thumbnail: "",
        category: "Grumpy",

  },
  {
  
        name: "Quite Miss Home",
        artist: "James Arthur",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {

        name: "If This Is The Last Time",
        artist: "LANY",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {

        name: "Hey Jude",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {

        name: "Take it easy",
        artist: "The Eagles",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
 
  },
  {

        name: "Have You Ever Seen the Rain",
        artist: "Creedence Clearwater",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {
 
        name: "Tennessee Whiskey",
        artist: "Chris Stapleton",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
 
  },
  {

        name: "Stop this train",
        artist: "John Mayer",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {

        name: "Drops of Jupiter",
        artist: "Train",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {

        name: "Fast Cars",
        artist: "Tracy Chapman",
        url: "",
        thumbnail: "",
        category: "Nostalgic",

  },
  {
  
        name: "Best Part",
        artist: "Daniel Cesar",
        url: "",
        thumbnail: "",
        category: "Romantic",

  },
  {
  
        name: "Let’s Stay Together",
        artist: "Al Green",
        url: "",
        thumbnail: "",
        category: "Romantic",
 
  },
  {
 
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        url: "",
        thumbnail: "",
        category: "Romantic",
  
  },
  {
 
        name: "Yellow",
        artist: "Coldplay",
        url: "",
        thumbnail: "",
        category: "Romantic",
  
  },
  {
  
        name: "Your Song",
        artist: "Elton John",
        url: "",
        thumbnail: "",
        category: "",
 
  },
  {
  
        name: "At Last",
        artist: "Etta James",
        url: "",
        thumbnail: "",
        category: "Romantic",
 
  },
  {
 
        name: "Till there was you",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Romantic",

  },
  {
  
        name: "If I ain’t Got You",
        artist: "Alicia Keys",
        url: "",
        thumbnail: "",
        category: "Romantic",

  },
  {
 
        name: "Always and Forever",
        artist: "Heatwave",
        url: "",
        thumbnail: "",
        category: "Romantic",
 
  },
  {

        name: "Every Breath You Take",
        artist: "The Police",
        url: "",
        thumbnail: "",
        category: "Romantic",
 
  },
  {
  
        name: "Sunday’s Best",
        artist: "Surfaces",
        url: "",
        thumbnail: "",
        category: "Fun",
 
  },
  {
  
        name: "Blinding Lights",
        artist: "The Weeknd",
        url: "",
        thumbnail: "",
        category: "Fun",
  
  },
  {
  
        name: "Electric Feel",
        artist: "MGMT",
        url: "",
        thumbnail: "",
        category: "Fun",

  },
  {
 
        name: "Heartbreaker",
        artist: "Mariah Carey",
        url: "",
        thumbnail: "",
        category: "Fun",
  
  },
  {
 
        name: "Love Like This",
        artist: "Faith Evans",
        url: "",
        thumbnail: "",
        category: "Fun",
 
  },
  {
  
        name: "Walking On a Dream",
        artist: "Empire of the Sun",
        url: "",
        thumbnail: "",
        category: "Fun",

  },
  {
  
        name: "You Belong with Me",
        artist: "Taylor Swift",
        url: "",
        thumbnail: "",
        category: "Fun",

  },
  {
 
        name: "Hot and Cold",
        artist: "Katy Perry",
        url: "",
        thumbnail: "",
        category: "Fun",
 
  },
  {
 
        name: "Latch",
        artist: "Disclosure Sam Smith",
        url: "",
        thumbnail: "",
        category: "Fun",

  },
  {

        name: "The Spins",
        artist: "Mac Miller",
        url: "",
        thumbnail: "",
        category: "Fun",
 
  },
  {

        name: "Stronger",
        artist: "Kanye West",
        url: "",
        thumbnail: "",
        category: "Active",

  },
  {
 
        name: "End of Time",
        artist: "Beyonce",
        url: "",
        thumbnail: "",
        category: "Active",
 
  },
  {
 
        name: "Get Right",
        artist: "Jennifer Lopez",
        url: "",
        thumbnail: "",
        category: "Active",
  
  },
  {
  
        name: "Heartless",
        artist: "The Weeknd",
        url: "",
        thumbnail: "",
        category: "Active",
 
  },
  {
  
        name: "Suit and Tie",
        artist: "Justin Timberlake",
        url: "",
        thumbnail: "",
        category: "Active",

  },
  {
  
        name: "This is what you came for",
        artist: "Rihanna",
        url: "",
        thumbnail: "",
        category: "Active",
  
  },
  {
   
        name: "Don’t you worry child",
        artist: "Sweedish House Mafia",
        url: "",
        thumbnail: "",
        category: "Active",
 
  },
  {
   
        name: "Pursuit of Happiness",
        artist: "Kid Cudi, Steve Aoki",
        url: "",
        thumbnail: "",
        category: "Active",
   
  },
  {
 
        name: "Just Dance",
        artist: "Lady Gaga",
        url: "",
        thumbnail: "",
        category: "Active",
 
  },
  {
  
        name: "One Kiss",
        artist: "Dua Lupa",
        url: "",
        thumbnail: "",
        category: "Active",
 
  },
  {
  
        name: "Thunderstruck",
        artist: "AC/DC",
        url: "",
        thumbnail: "",
        category: "Motivated",

  },
  {
  
        name: "Lose Yourself",
        artist: "Eminem",
        url: "",
        thumbnail: "",
        category: "Motivated",
 
  },
  {
   
        name: "We Are the Champions",
        artist: "Queen",
        url: "",
        thumbnail: "",
        category: "Motivated",
  
  },
  {
   
        name: "Eye of the Tiger",
        artist: "Survivor",
        url: "",
        thumbnail: "",
        category: "Motivated",
   
  },
  {
  
        name: "One More Time",
        artist: "Daft Punk",
        url: "",
        thumbnail: "",
        category: "Motivated",
 
  },
  {
  
        name: "Feel So Close",
        artist: "Calvin Harris",
        url: "",
        thumbnail: "",
        category: "Motivated",
  
  },
  {
   
        name: "Strobe",
        artist: "deadmau5",
        url: "",
        thumbnail: "",
        category: "Motivated",
  
  },
  {
   
        name: "Energy",
        artist: "Disclosure",
        url: "",
        thumbnail: "",
        category: "Motivated",
  
  },
  {
   
        name: "Work Bitch",
        artist: "Britney Spears",
        url: "",
        thumbnail: "",
        category: "Motivated",
   
  },
  {
   
        name: "Sunday Morning",
        artist: "Maroon 5",
        url: "",
        thumbnail: "",
        category: "Lazy",
   
  },
  {
    
        name: "Slow Ride",
        artist: "Foghat",
        url: "",
        thumbnail: "",
        category: "Lazy",
   
  },
  {
   
        name: "Waiting On the World to Change",
        artist: "John Mayer",
        url: "",
        thumbnail: "",
        category: "Lazy",
  
  },
  {
   
        name: "Human Nature",
        artist: "Michael Jackson",
        url: "",
        thumbnail: "",
        category: "Lazy",
  
  },
  {
  
        name: "Is This Love",
        artist: "Bob Marley",
        url: "",
        thumbnail: "",
        category: "Lazy",
  
  },
  {
   
        name: "Somebody That I Used to Know",
        artist: "Gotye",
        url: "",
        thumbnail: "",
        category: "Lazy",
   
  },
  {
  
        name: "La Vie en rose",
        artist: "Louis Armstrong",
        url: "",
        thumbnail: "",
        category: "Lazy",
 
  },
  {
  
        name: "I’m so tired",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Lazy",

  },
  {
  
        name: "Island in the Sun",
        artist: "Weezer",
        url: "",
        thumbnail: "",
        category: "Lazy",
 
  },
  {
   
        name: "This Modern Love",
        artist: "Bloc Party",
        url: "",
        thumbnail: "",
        category: "Lazy",

  },
];

db.Song.deleteMany({})
  .then(() => db.Song.collection.insertMany(songSeed))
  .then((data) => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
