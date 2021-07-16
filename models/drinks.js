const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//type refers to alcoholic or non
const DrinkSchema = new Schema({
    drinktype:[{

    alcoholic: {
        type: Boolean,
        trim: true,
        required: "Type required"
    },

    name: {
        type: String,
        trim: true,
        required: "Drink name required"
    },
    
    category: {
        type: String,
        trim: true,
        required: "Category required"
    },

    img: {
        type: Buffer,
        contentType: String
    },

    url: {
        type: String,
        trim: true,
        required: "URL required"
    },

    }],    
})

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink