const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function(value){
            const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    city: {
        type: String,
        required: true,
        validate: function(value){
            const cityRegex = /^[A-Za-z\s]*$/;
            return cityRegex.test(value);
        }
    },
    URL: {
        type: String,
        required: true,
        validate: function(value){
            const urlRegex = /^(http|https)+/;
            return urlRegex.test(value);
        }
    },
    zipcode: {
        type: String,
        required: true,
        validate: function(value){
            const zipRegex = /^\d{5}-\d{4}$/;
            return zipRegex.test(value);
        }
    },
    phone: {
        type: String,
        required: true,
        validate: function(value){
            const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;
            return phoneRegex.test(value);
        }
    }
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;