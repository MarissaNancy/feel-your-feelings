const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {
        type: String,
        trime: true,
        required: "Song name required"
    },

    artist: {
        type: String,
        trim: true,
        required: "Artist name required"
    },

    url: {
        type: String,
        trim: true,
        required: "URL required"
    },

    thumbnail: {
        type: Buffer,
        contentType: String
    },

    category: {
        type: String,
        trim: true,
        required: "Category required"
    },

});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;