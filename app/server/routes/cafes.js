const express = require('express');
const Cafe = require('../models/cafes');
const router = express.Router();


router.get('/', (req, res) => {
    try {
    const cafes = Cafe.getCafes();
    res.send(cafes);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
    });

module.exports = router;