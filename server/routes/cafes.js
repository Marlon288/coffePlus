const express = require('express');
const Cafe = require('../models/cafes');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const cafes = await Cafe.getCafes();
        res.send(cafes);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.post('/searchResults', async (req, res) => {
    try {
        const cafes = await Cafe.getCafesForCategoryAndLocation(req.body);
        res.send(cafes);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.post('/category', async (req, res) => {
    try {
        const cafes = await Cafe.getCategoriesForCafe(req.body);
        res.send(cafes);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})

module.exports = router;