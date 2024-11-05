const Datastore = require("nedb");
const db = new Datastore({ filename: './database/history_theme.db', autoload: true, corruptAlertThreshold: 1 });
themes = [
    {
        "id": 1,
        "title": "Козаччина",
        "description": "Період в історії України, коли козаки стали основною силою в боротьбі за автономію.",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 2,
        "title": "Гетьманщина",
        "description": "Час, коли Україна була під гетьманською владою.",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 3,
        "title": "Українська революція",
        "description": "Події 1917-1921 років, коли Україна здобула незалежність.",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 4,
        "title": "Друга світова війна",
        "description": "Участь України у Другій світовій війні як частини СРСР.",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 5,
        "title": "Незалежність України",
        "description": "Процес здобуття незалежності України в 1991 році.",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40"
    },
    {
        "id": 6,
        "title": "Сучасна Україна",
        "description": "Становлення та розвиток України після 1991 року.",
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
insertIfNotExists(db, themes, 'title');
module.exports = db;
