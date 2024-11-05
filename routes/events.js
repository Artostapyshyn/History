const express = require('express');
const router = express.Router();
const eventDb = require('../models/event');
const categoryDb = require('../models/eventCategory');

const themeEventMappings = {
    "QlXt0pIM44UP1wN5": [
        "fRe7TBGKou3EQVGV",
        "jP2bkJatBtnPZrMZ"
    ],
    "TsY8RE5Phhv2pS8I": [
        "jP2bkJatBtnPZrMZ"
    ],
    "abIFLrx4AfG7Bq3Z": [
        "2ce5zBkpEu6zdBsw"
    ],
    "YLUZeQefer2vxG86": [
        "JpRdPXrihR7Cld7A",
        "tS1WNzwLnkIcFuCF"
    ],
    "VxEIsEkIoJAFCxrK" : [
        "nYf2qWlyaJIcaLVV",
        "deFi1WIvcKJsJo5R"
    ],
    "5r0e5PTafiVcyLXi": [
        "F0AWodYEhmv3sp7J",
        "h8XhIjUEKMCWJdbG"
    ]
};

router.get('/', (req, res) => {
    const categoryId = req.query.category;
    let query = {};

    if (categoryId) {
        query.categoryId = categoryId;
    }

    eventDb.find(query, (err, events) => {
        if (err) return res.status(500).send(err);

        categoryDb.find({}, (err, categories) => {
            if (err) return res.status(500).send(err);

            let category;
            if (categoryId) {
                category = categories.find(cat => cat._id === parseInt(categoryId));
            }

            res.render('eventList', {events, categories, category});
        });
    });
});

router.get('/:id', (req, res) => {
    eventDb.findOne({_id: req.params.id}, (err, event) => {
        if (err || !event) return res.status(404).send('Event not found');
        res.render('eventDetail', {event});
    });
});

router.get('/by-theme/:id', (req, res) => {
    const themeId = req.params.id;
    const eventIds = themeEventMappings[themeId];

    eventDb.find({ _id: { $in: eventIds } }, (err, events) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('eventList', { events, themeId });
    });
});
module.exports = router;