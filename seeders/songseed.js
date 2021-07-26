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
        name: "Happy",
        author: "Pharrell Williams",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {
        name: "I Wanna Dance with Somebody (Who Love Me)",
        author: "Whitney Houston",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {
        name: "Tenderness",
        author: "General Public",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {

        name: "Valerie",
        author: "Amy Winehouse",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {
        name: "Uptown Funk",
        author: "Mark Ronson ft. Bruno Mars",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {

        name: "Lovely Day",
        author: "Bill Withers",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Can’t Stop the Feeling!",
        author: "Justin Timberlake",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Amber",
        author: "311",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Peaches",
        author: "Justin Biebar ft. Daniel Caesar",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Girl Just Want To Have Fun",
        author: "Cyndi Lauper",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Sunset Lover",
        author: "Petit Biscuit",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Fix You",
        author: "Coldplay",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {

        name: "Lonely",
        author: "Justin Bb & Benny Blano",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {

        name: "Give me Love",
        author: "Ed Sheeran",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {

        name: "Before You Go",
        author: "Lewis Capaldi",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Wherever You Are",
        author: "Kodaline",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Be Alright",
        author: "Dean Lewis",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {
 
        name: "Are You Happy?",
        author: "SHY Martin",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {

        name: "People Help The People",
        author: "Birdy",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {

        name: "Lost Boy",
        author: "Ruth B",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {

        name: "Holocene",
        author: "Bon Iver",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Somewhere Only We Know",
        author: "Keane",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Wake Me Up When September Ends",
        author: "Greenday",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Superman (It’s not Easy)",
        author: "Five for Fighting",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "One Last Breath",
        author: "Creed",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Chasing Cars",
        author: "Snow Patrol",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Shallow",
        author: "Lady GaGa ft. Bradley Cooper",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",
 
  },
  {

        name: "Grow As We Go",
        author: "Ben Platt",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Demons",
        author: "Jacob Lee",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Keeping me Alive",
        author: "Jonathan Roy",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",
 
  },
  {

        name: "Gives you hell",
        author: "All American Rejects",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",
 
  },
  {
 
        name: "Don’t Worry Be Happy",
        author: "Bobby McFerrin",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {

        name: "Crazy",
        author: "Gnarls Barkley",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",
 
  },
  {
 
        name: "Sitting, Waiting, Wishing",
        author: "Jack Johnson",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
 
        name: "We are never getting back together",
        author: "Taylor Swift",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",
 
  },
  {

        name: "So What",
        author: "Pink",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {

        name: "Truth Hurts",
        author: "Lizzo",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {

        name: "Bad Day",
        author: "Daniel Powder",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
  
        name: "You outta know",
        author: "Alanis Morisette",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
 
        name: "Live and Let Die",
        author: "Guns ‘N’ Roses",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
  
        name: "Quite Miss Home",
        author: "James Arthur",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {

        name: "If This Is The Last Time",
        author: "LANY",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {

        name: "Hey Jude",
        author: "The Beatles",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {

        name: "Take it easy",
        author: "The Eagles",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",
 
  },
  {

        name: "Have You Ever Seen the Rain",
        author: "Creedence Clearwater",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {
 
        name: "Tennessee Whiskey",
        author: "Chris Stapleton",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",
 
  },
  {

        name: "Stop this train",
        author: "John Mayer",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {

        name: "Drops of Jupiter",
        author: "Train",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {

        name: "Fast Cars",
        author: "Tracy Chapman",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {
  
        name: "Best Part",
        author: "Daniel Cesar",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",

  },
  {
  
        name: "Let’s Stay Together",
        author: "Al Green",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
 
  },
  {
 
        name: "Thinking Out Loud",
        author: "Ed Sheeran",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
  
  },
  {
 
        name: "Yellow",
        author: "Coldplay",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
  
  },
  {
  
        name: "Your Song",
        author: "Elton John",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "https://www.bensound.com/bensound-img/buddy.jpg",
 
  },
  {
  
        name: "At Last",
        author: "Etta James",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
 
  },
  {
 
        name: "Till there was you",
        author: "The Beatles",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",

  },
  {
  
        name: "If I ain’t Got You",
        author: "Alicia Keys",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",

  },
  {
 
        name: "Always and Forever",
        author: "Heatwave",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
 
  },
  {

        name: "Every Breath You Take",
        author: "The Police",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Romantic",
 
  },
  {
  
        name: "Sunday’s Best",
        author: "Surfaces",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
 
  },
  {
  
        name: "Blinding Lights",
        author: "The Weeknd",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
  
  },
  {
  
        name: "Electric Feel",
        author: "MGMT",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",

  },
  {
 
        name: "Heartbreaker",
        author: "Mariah Carey",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
  
  },
  {
 
        name: "Love Like This",
        author: "Faith Evans",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
 
  },
  {
  
        name: "Walking On a Dream",
        author: "Empire of the Sun",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",

  },
  {
  
        name: "You Belong with Me",
        author: "Taylor Swift",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",

  },
  {
 
        name: "Hot and Cold",
        author: "Katy Perry",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
 
  },
  {
 
        name: "Latch",
        author: "Disclosure Sam Smith",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",

  },
  {

        name: "The Spins",
        author: "Mac Miller",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Fun",
 
  },
  {

        name: "Stronger",
        author: "Kanye West",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",

  },
  {
 
        name: "End of Time",
        author: "Beyonce",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
 
  },
  {
 
        name: "Get Right",
        author: "Jennifer Lopez",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
  
  },
  {
  
        name: "Heartless",
        author: "The Weeknd",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
 
  },
  {
  
        name: "Suit and Tie",
        author: "Justin Timberlake",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",

  },
  {
  
        name: "This is what you came for",
        author: "Rihanna",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
  
  },
  {
   
        name: "Don’t you worry child",
        author: "Sweedish House Mafia",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
 
  },
  {
   
        name: "Pursuit of Happiness",
        author: "Kid Cudi, Steve Aoki",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
   
  },
  {
 
        name: "Just Dance",
        author: "Lady Gaga",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
 
  },
  {
  
        name: "One Kiss",
        author: "Dua Lupa",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Active",
 
  },
  {
  
        name: "Thunderstruck",
        author: "AC/DC",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",

  },
  {
  
        name: "Lose Yourself",
        author: "Eminem",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
 
  },
  {
   
        name: "We Are the Champions",
        author: "Queen",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
  
  },
  {
   
        name: "Eye of the Tiger",
        author: "Survivor",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
   
  },
  {
  
        name: "One More Time",
        author: "Daft Punk",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
 
  },
  {
  
        name: "Feel So Close",
        author: "Calvin Harris",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
  
  },
  {
   
        name: "Strobe",
        author: "deadmau5",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
  
  },
  {
   
        name: "Energy",
        author: "Disclosure",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
  
  },
  {
   
        name: "Work Bitch",
        author: "Britney Spears",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
   
  },
  {
   
        name: "Sunday Morning",
        author: "Maroon 5",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
   
  },
  {
    
        name: "Slow Ride",
        author: "Foghat",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
   
  },
  {
   
        name: "Waiting On the World to Change",
        author: "John Mayer",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
  
  },
  {
   
        name: "Human Nature",
        author: "Michael Jackson",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
  
  },
  {
  
        name: "Is This Love",
        author: "Bob Marley",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
  
  },
  {
   
        name: "Somebody That I Used to Know",
        author: "Gotye",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
   
  },
  {
  
        name: "La Vie en rose",
        author: "Louis Armstrong",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
 
  },
  {
  
        name: "I’m so tired",
        author: "The Beatles",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",

  },
  {
  
        name: "Island in the Sun",
        author: "Weezer",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Lazy",
 
  },
  {
   
        name: "This Modern Love",
        author: "Bloc Party",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/True%20Colors.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
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
