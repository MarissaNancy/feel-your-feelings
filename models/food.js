const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({

    foodcategory: [{

        type:{
        type: String,
        trim: true,
        required: "Category required"
    },

    name: {
        type: String,
        trim: true,
        required:"Name required"
    },

    url: {
        type: String,
        trim: true,
        required: "URL required"
    },

    }]
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food