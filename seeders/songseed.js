let mongoose = require("mongoose");
let db = require("../models");
const MONGO_URI = require("../config/keys").mongoURI;
// edit end of next line 
mongoose.connect(MONGO_URI || "mongodb://localhost/feelings", {

  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

let songSeed = [
  {
    song: [
      {
        name: "Happy",
        artist: "Pharrell Williams",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "I Wanna Dance with Somebody (Who Love Me)",
        artist: "Whitney Houston",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Tenderness",
        artist: "General Public",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Valerie",
        artist: "Amy Winehouse",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Lovely Day",
        artist: "Bill Withers",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Can’t Stop the Feeling!",
        artist: "Justin Timberlake",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Amber",
        artist: "311",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Peaches",
        artist: "Justin Biebar ft. Daniel Caesar",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Girl Just Want To Have Fun",
        artist: "Cyndi Lauper",
        url: "",
        thumbnail: "",
        category: "Happy",
      },
    ],
  },
  {
    song: [
      {
        name: "Sunset Lover",
        artist: "Petit Biscuit",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Fix You",
        artist: "Coldplay",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Lonely",
        artist: "Justin Bb & Benny Blano",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Give me Love",
        artist: "Ed Sheeran",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Before You Go",
        artist: "Lewis Capaldi",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Wherever You Are",
        artist: "Kodaline",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Be Alright",
        artist: "Dean Lewis",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Are You Happy?",
        artist: "SHY Martin",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "People Help The People",
        artist: "Birdy",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Lost Boy",
        artist: "Ruth B",
        url: "",
        thumbnail: "",
        category: "Moody",
      },
    ],
  },
  {
    song: [
      {
        name: "Holocene",
        artist: "Bon Iver",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Somewhere Only We Know",
        artist: "Keane",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Wake Me Up When September Ends",
        artist: "Greenday",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Superman (It’s not Easy)",
        artist: "Five for Fighting",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "One Last Breath",
        artist: "Creed",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Chasing Cars",
        artist: "Snow Patrol",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Shallow",
        artist: "Lady GaGa ft. Bradley Cooper",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Grow As We Go",
        artist: "Ben Platt",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Demons",
        artist: "Jacob Lee",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Keeping me Alive",
        artist: "Jonathan Roy",
        url: "",
        thumbnail: "",
        category: "Tired",
      },
    ],
  },
  {
    song: [
      {
        name: "Gives you hell",
        artist: "All American Rejects",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Don’t Worry Be Happy",
        artist: "Bobby McFerrin",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Crazy",
        artist: "Gnarls Barkley",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Sitting, Waiting, Wishing",
        artist: "Jack Johnson",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "We are never getting back together",
        artist: "Taylor Swift",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "So What",
        artist: "Pink",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Truth Hurts",
        artist: "Lizzo",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Bad Day",
        artist: "Daniel Powder",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "You outta know",
        artist: "Alanis Morisette",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Live and Let Die",
        artist: "Guns ‘N’ Roses",
        url: "",
        thumbnail: "",
        category: "Grumpy",
      },
    ],
  },
  {
    song: [
      {
        name: "Quite Miss Home",
        artist: "James Arthur",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "If This Is The Last Time",
        artist: "LANY",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Hey Jude",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Take it easy",
        artist: "The Eagles",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Have You Ever Seen the Rain",
        artist: "Creedence Clearwater",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Tennessee Whiskey",
        artist: "Chris Stapleton",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Stop this train",
        artist: "John Mayer",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Drops of Jupiter",
        artist: "Train",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Fast Cars",
        artist: "Tracy Chapman",
        url: "",
        thumbnail: "",
        category: "Nostalgic",
      },
    ],
  },
  {
    song: [
      {
        name: "Best Part",
        artist: "Daniel Cesar",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Let’s Stay Together",
        artist: "Al Green",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Yellow",
        artist: "Coldplay",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Your Song",
        artist: "Elton John",
        url: "",
        thumbnail: "",
        category: "",
      },
    ],
  },
  {
    song: [
      {
        name: "At Last",
        artist: "Etta James",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Till there was you",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "If I ain’t Got You",
        artist: "Alicia Keys",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Always and Forever",
        artist: "Heatwave",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Every Breath You Take",
        artist: "The Police",
        url: "",
        thumbnail: "",
        category: "Romantic",
      },
    ],
  },
  {
    song: [
      {
        name: "Sunday’s Best",
        artist: "Surfaces",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Blinding Lights",
        artist: "The Weeknd",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Electric Feel",
        artist: "MGMT",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Heartbreaker",
        artist: "Mariah Carey",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Love Like This",
        artist: "Faith Evans",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Walking On a Dream",
        artist: "Empire of the Sun",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "You Belong with Me",
        artist: "Taylor Swift",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Hot and Cold",
        artist: "Katy Perry",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Latch",
        artist: "Disclosure Sam Smith",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "The Spins",
        artist: "Mac Miller",
        url: "",
        thumbnail: "",
        category: "Fun",
      },
    ],
  },
  {
    song: [
      {
        name: "Stronger",
        artist: "Kanye West",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "End of Time",
        artist: "Beyonce",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Get Right",
        artist: "Jennifer Lopez",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Heartless",
        artist: "The Weeknd",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Suit and Tie",
        artist: "Justin Timberlake",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "This is what you came for",
        artist: "Rihanna",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Don’t you worry child",
        artist: "Sweedish House Mafia",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Pursuit of Happiness",
        artist: "Kid Cudi, Steve Aoki",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Just Dance",
        artist: "Lady Gaga",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "One Kiss",
        artist: "Dua Lupa",
        url: "",
        thumbnail: "",
        category: "Active",
      },
    ],
  },
  {
    song: [
      {
        name: "Thunderstruck",
        artist: "AC/DC",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Lose Yourself",
        artist: "Eminem",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "We Are the Champions",
        artist: "Queen",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Eye of the Tiger",
        artist: "Survivor",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "One More Time",
        artist: "Daft Punk",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Feel So Close",
        artist: "Calvin Harris",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Strobe",
        artist: "deadmau5",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Energy",
        artist: "Disclosure",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Work Bitch",
        artist: "Britney Spears",
        url: "",
        thumbnail: "",
        category: "Motivated",
      },
    ],
  },
  {
    song: [
      {
        name: "Sunday Morning",
        artist: "Maroon 5",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Slow Ride",
        artist: "Foghat",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Waiting On the World to Change",
        artist: "John Mayer",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Human Nature",
        artist: "Michael Jackson",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Is This Love",
        artist: "Bob Marley",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Somebody That I Used to Know",
        artist: "Gotye",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "La Vie en rose",
        artist: "Louis Armstrong",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "I’m so tired",
        artist: "The Beatles",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "Island in the Sun",
        artist: "Weezer",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
  },
  {
    song: [
      {
        name: "This Modern Love",
        artist: "Bloc Party",
        url: "",
        thumbnail: "",
        category: "Lazy",
      },
    ],
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
