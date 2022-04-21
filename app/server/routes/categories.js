const express = require('express');
const Category = require('../models/categories');
const router = express.Router();


router.get('/', (req, res) => {
    try {
    const categories = Category.getCategories();
    res.send(categories);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
    });

module.exports = router;