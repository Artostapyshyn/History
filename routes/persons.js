var express = require('express');
var router = express.Router();
const personDb = require('../models/person');
const eventDb = require('../models/event');

router.get('/', (req, res) => {
    personDb.find({}, (err, persons) => {
        if (err) return res.status(500).send(err);
        res.render('personList', { persons });
    });
});

router.get('/:id', (req, res) => {
    personDb.findOne({ _id: req.params.id }, (err, person) => {
        if (err || !person) return res.status(404).send('Person not found');

        const personId = person.id;

        eventDb.find({ person_id: personId }, (err, events) => {
            if (err) return res.status(500).send(err);
            person.events = events;
            res.render('personDetail', { person });
        });
    });
});

module.exports = router;
