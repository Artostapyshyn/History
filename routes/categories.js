const express = require('express');
const router = express.Router();
const categoryDb = require('../models/eventCategory');
const eventDb = require('../models/event');

router.get('/', (req, res) => {
    categoryDb.find({}, (err, categories) => {
        if (err) return res.status(500).send(err);
        res.render('categoryList', {categories});
    });
});

module.exports = router;
