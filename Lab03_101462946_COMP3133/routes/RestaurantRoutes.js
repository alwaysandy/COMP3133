const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//Read ALL
//http://localhost:8081/restaurants
app.get('/restaurants', async (req, res) => {
    console.log(req.query.sortBy);
    let restaurants;
    if (req.query.sortBy === "DESC" || req.query.sortBy === "ASC") {
        console.log("Yay");
        restaurants = await restaurantModel.find({}).select("_id cuisine name city restaurant_id").sort({"restaurant_id": req.query.sortBy});
    } else {
        restaurants = await restaurantModel.find({});
    }

    try {
        if (restaurants.length !== 0){
            res.send(restaurants);
        }else{
            res.send(JSON.stringify({status:false, message: "No restaurants found"}))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const cuisine = req.params.cuisine;
    const restaurants = await restaurantModel.getRestaurantByCuisine(cuisine)

    try {
        if(restaurants.length !== 0){
            res.send(restaurants);
        }else{
            res.send(JSON.stringify({status:false, message: "No restaurants found"}))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await restaurantModel
        .find({ $and: [{cuisine : "Delicatessen"}, {city : {$ne : "Brooklyn"}}]})
        .select("cuisine name city")
        .sort({"name": "asc"});

    try {
        if(restaurants.length != 0){
            res.send(restaurants);
        }else{
            res.send(JSON.stringify({status:false, message: "No restaurants found"}))
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app