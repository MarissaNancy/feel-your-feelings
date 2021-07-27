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
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Happy%20-%20Pharrell%20Williams%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {
        name: "I Wanna Dance with Somebody (Who Love Me)",
        author: "Whitney Houston",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Whitney%20Houston%20-%20I%20Wanna%20Dance%20With%20Somebody%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {
        name: "Tenderness",
        author: "General Public",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/General%20Public%20-%20Tenderness%20%5BLYRICS%5D%20HQ.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {

        name: "Valerie",
        author: "Amy Winehouse",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Amy%20Winehouse%20-%20Valerie.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {
        name: "Uptown Funk",
        author: "Mark Ronson ft. Bruno Mars",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Mark%20Ronson%20-%20Uptown%20Funk%20(Lyrics)%20ft.%20Bruno%20Mars.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",
  },
  {

        name: "Lovely Day",
        author: "Bill Withers",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Lovely%20Day%20RIP%20Bill%20Withers%20(Lyrics%20Video).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Can’t Stop the Feeling!",
        author: "Justin Timberlake",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/CAN'T%20STOP%20THE%20FEELING!%20-%20Justin%20Timberlake%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Amber",
        author: "311",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Amber%20-%20311%20%5BLYRICS%5D.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Peaches",
        author: "Justin Biebar ft. Daniel Caesar",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Justin%20Bieber%20-%20Peaches%20(Lyrics)%20ft.%20Daniel%20Caesar,%20Giveon.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Girl Just Want To Have Fun",
        author: "Cyndi Lauper",
        audio: "https://github.com/MarissaNancy/feel-your-feelings/blob/main/client/src/songs/Cyndi%20Lauper%20-%20Girls%20Just%20Want%20To%20Have%20Fun%20(letra).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Happy",

  },
  {

        name: "Sunset Lover",
        author: "Petit Biscuit",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/PETIT%20BISCUIT%20-%20Sunset%20Lover.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Fix You",
        author: "Coldplay",
        audio: "hhttps://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Coldplay%20-%20Fix%20You%20(Lyric%20Video).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Lewis%20Capaldi%20-%20Before%20You%20Go%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Wherever You Are",
        author: "Kodaline",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Kodaline%20-%20Wherever%20You%20Are%20(Official%20Lyric%20Video).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {
 
        name: "Be Alright",
        author: "Dean Lewis",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Dean%20Lewis%20-%20Be%20Alright%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {
 
        name: "Are You Happy?",
        author: "SHY Martin",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/SHY%20Martin%20-%20Are%20you%20happy%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {

        name: "People Help The People",
        author: "Birdy",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Birdy%20-%20People%20Help%20the%20People%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",

  },
  {

        name: "Lost Boy",
        author: "Ruth B",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Ruth%20B.%20-%20Lost%20Boy%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Moody",
 
  },
  {

        name: "Holocene",
        author: "Bon Iver",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Bon%20Iver%20-%20Holocene.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Somewhere Only We Know",
        author: "Keane",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Keane%20-%20Somewhere%20Only%20We%20Know%20(Lyrics).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Superman%20(Its%20Not%20Easy)Five%20for%20Fighting%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "One Last Breath",
        author: "Creed",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Creed%20-%20One%20Last%20Breath%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Chasing Cars",
        author: "Snow Patrol",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Snow%20Patrol%20-%20Chasing%20Cars%20%5BLyrics%5D.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Tired",

  },
  {

        name: "Shallow",
        author: "Lady GaGa ft. Bradley Cooper",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Lady%20Gaga,%20Bradley%20Cooper%20-%20Shallow%20(Lyrics)%20(A%20Star%20Is%20Born%20Soundtrack).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Keeping%20Me%20Alive%20-%20Jonathan%20Roy%20(LYRICS).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Bobby%20McFerrin%20-%20Don't%20Worry%20Be%20Happy%20(Official%20Music%20Video).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Sitting%20Waiting%20Wishing%20by%20Jack%20Johnson%20(lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
 
        name: "We are never getting back together",
        author: "Taylor Swift",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/We%20Are%20Never%20Ever%20Getting%20Back%20Together%20lyrics.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",
 
  },
  {

        name: "So What",
        author: "Pink",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/So%20What.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {

        name: "Truth Hurts",
        author: "Lizzo",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Lizzo%20-%20Truth%20Hurts%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {

        name: "Bad Day",
        author: "Daniel Powder",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Daniel%20Powter%20-%20Bad%20Day%20(Lyrics).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
  
        name: "You outta know",
        author: "Alanis Morisette",
        audio: "hhttps://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/You%20Oughta%20Know%20-%20Alanis%20Morissette%20-%20Lyrics.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Grumpy",

  },
  {
 
        name: "Live and Let Die",
        author: "Guns ‘N’ Roses",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Live%20And%20Let%20Die%20(2018%20Remaster).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Creedence%20Clearwater%20Revival%20Have%20You%20Ever%20Seen%20The%20Rain.mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Nostalgic",

  },
  {
 
        name: "Tennessee Whiskey",
        author: "Chris Stapleton",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Chris%20Stapleton%20Tennessee%20Whiskey%20Lyrics.mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Al%20Green%20-%20Let's%20Stay%20Together%20(Official%20Audio).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Coldplay%20-%20Yellow%20Lyrics.mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Beyonc%C3%A9-End%20of%20Time.mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Calvin%20Harris%20ft.%20Rihanna%20-%20This%20Is%20What%20You%20Came%20For%20(Lyrics)%20HD.mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/ACDC%20-%20Thunderstruck.mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Daft%20Punk%20-%20One%20more%20time%20(Official%20audio).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
 
  },
  {
  
        name: "Feel So Close",
        author: "Calvin Harris",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Calvin%20Harris%20-%20Feel%20So%20Close%20(Audio).mp3?raw=true",
        img: "https://www.bensound.com/bensound-img/buddy.jpg",
        category: "Motivated",
  
  },
  {
   
        name: "Strobe",
        author: "deadmau5",
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Deadmau5%20-%20Strobe%20(Club%20Edit).mp3?raw=true",
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
        audio: "https://github.com/Lilliemefie/miniproject1/blob/main/song%20for%20FeelYourFeelings/Britney%20Spears%20-%20Work%20Bitch%20(Lyrics).mp3?raw=true",
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