const express = require('express');
const Review = require('../models/reviews');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
    const reviews = await Review.getReviews();
    res.send(reviews);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
})
.post('/cafe', async (req, res) => {
    try {
        const reviews = await Review.getReviewsForCafe(req.body);
        res.send(reviews);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.post('/stars', async (req, res) => {
    try {
        const reviews = await Review.getStarsForCafes(req.body);
        res.send(reviews);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.post('/review', async (req, res) => {
    try {
        const reviews = await Review.getReview(req.body);
        res.send(...reviews);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.put('/edit', async (req, res) => {
    try {
      const review = await Review.editReview(req.body);
      res.send(review);
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })
.post('/new', async (req, res) => {
    try {
      const review = await Review.newReview(req.body);
      res.send({...review})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

module.exports = router;