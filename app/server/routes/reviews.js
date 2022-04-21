const express = require('express');
const Review = require('../models/reviews');
const router = express.Router();


router.get('/', (req, res) => {
    try {
    const reviews = Review.getReviews();
    res.send(reviews);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
    });

module.exports = router;