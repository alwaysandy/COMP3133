const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    building: {
        type: String,
        required: false,
        trim: true,
    },
    street: {
        type: String,
        required: [true, "Please enter a valid street"],
        trim: true
    },
    zipcode: {
        type: String,
        default: null,
        required: false
    }
})

//Create Schema
const RestaurantSchema = new mongoose.Schema({
    address: {
        type: AddressSchema,
        required: [true, "Please Include An Address"],
    },
    city: {
        type: String,
        required: [true, "Please Include A City"],
        trim: true,
    },
    cuisine: {
        type: String,
        required: [true, "Please Include Cuisine Type"],
        trim: true,
    },
    name: {
        type: String,
        required: [true, "Please Include A Name"],
        trim: true,
    },
    restaurant_id: {
        type: String,
        required: [true, "Please Include A restaurant ID"],
        trim: true
    }
});

RestaurantSchema.static("getRestaurantByCuisine", function(value) {
    return this.find({cuisine: value})
});

//Create Model
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;