const Datastore = require('nedb');
const db = new Datastore({ filename: './database/history_person_events.db', autoload: true, corruptAlertThreshold: 1 });

personEvents = [
    {
        "id": 1,
        "person_id": 1,
        "event_id": 1
    },
    {
        "id": 2,
        "person_id": 2,
        "event_id": 2
    },
    {
        "id": 3,
        "person_id": 3,
        "event_id": 17
    },
    {
        "id": 4,
        "person_id": 5,
        "event_id": 4
    },
    {
        "id": 6,
        "person_id": 6,
        "event_id": 6
    },
    {
        "id": 8,
        "person_id": 8,
        "event_id": 6
    },
    {
        "id": 9,
        "person_id": 9,
        "event_id": 13
    },
    {
        "id": 10,
        "person_id": 10,
        "event_id": 14
    },
    {
        "id": 11,
        "person_id": 11,
        "event_id": 14
    }
]

const insertIfNotExists = (db, data, uniqueField) => {
    data.forEach(item => {
        db.findOne({ [uniqueField]: item[uniqueField] }, (err, existing) => {
            if (err) {
                console.error('Error checking for existing item:', err);
            } else if (!existing) {
                db.insert(item, (err, newDoc) => {
                    if (err) {
                        console.error('Error inserting item:', err);
                    } else {
                        console.log('Inserted:', newDoc);
                    }
                });
            }
        });
    });
};
insertIfNotExists(db, personEvents, 'person_id');
module.exports = db;
