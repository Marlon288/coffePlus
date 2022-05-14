const express = require('express');
const Category = require('../models/categories');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const categories = await Category.getCategories();
        res.send(categories);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.get('/cafeForCategories', async (req, res) => {
    try {
        const cafes = await Category.getCafesForCategory(req.body);
        res.send(cafes);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.get('/category', async (req, res) => {
    try {
        const category = await Category.getCategory(req.body);
        res.send(category);
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})
.post('/add', async (req, res) => {
    try {
        const category = await Category.addCategory(req.body);
        res.send("Category has been added succefully");
    } catch(err) {
        res.status(401).send({message: err.message});
    }
})

module.exports = router;