const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//type refers to alcoholic or non
const DrinkSchema = new Schema({

    alcoholictype: {
        type: String,
        trim: true,
        required: "Type required"
    },

    name: {
        type: String,
        trim: true,
        required: "Drink name required"
    },

    img: {
        type: String,
    },

    url: {
        type: String,
        trim: true,
        required: "URL required"
    },

    category: {
        type: String,
        trim: true,
        required: "Category required"
    },
    
    ingridients: {
        type: String,
        trim: true
    },

    instructions: {
        type: String,
        trim: true 
    }

})

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink