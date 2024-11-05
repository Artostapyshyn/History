const express = require('express');
const router = express.Router();
const themeDb = require('../models/theme');
const eventDb = require('../models/event');
const themeEventDb = require('../models/eventTheme');

router.get('/', (req, res) => {
    themeDb.find({}, (err, themes) => {
        if (err) return res.status(500).send(err);
        res.render('themeList', { themes });
    });
});

router.get('/:id', (req, res) => {
    const themeId = req.params.id;

    themeDb.find({}, (err, themes) => {
        if (err) return res.status(500).send(err);

        themeEventDb.find({ theme_id: themeId }, (err, themeEvents) => {
            if (err) return res.status(500).send(err);

            if (themeEvents.length === 0) {
                return res.render('eventList', { events: [], themes, message: 'No events found for this theme.' });
            }

            const eventIds = themeEvents.map(te => te.event_id);

            eventDb.find({ _id: { $in: eventIds } }, (err, events) => {
                if (err) return res.status(500).send(err);

                res.render('eventList', { events, themes });
            });
        });
    });
});

module.exports = router;
