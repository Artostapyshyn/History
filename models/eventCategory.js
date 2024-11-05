const Datastore = require('nedb');
const db = new Datastore({ filename: './database/history_category.db', autoload: true, corruptAlertThreshold: 1 });

categories = [
    {
        "id": 1,
        "name": "Козаччина",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 2,
        "name": "Гетьманщина",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 3,
        "name": "Українська революція",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 4,
        "name": "Друга світова війна",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 5,
        "name": "Незалежність України",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 6,
        "name": "Сучасна Україна",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 7,
        "name": "Культура та мистецтво",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 8,
        "name": "Національний рух",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    }
];
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
insertIfNotExists(db, categories, 'name');
module.exports = db;
