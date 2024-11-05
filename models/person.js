const Datastore = require('nedb');
const db = new Datastore({ filename: './database/history_person.db', autoload: true, corruptAlertThreshold: 1 });

persons = [
    {
        "id": 1,
        "name": "Богдан Хмельницький",
        "biography": "Гетьман України, керівник козацького повстання проти польського панування.",
        "birth_date": "1595-12-27",
        "death_date": "1657-08-06",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bohdan_Khmelnytsky.jpg"
    },
    {
        "id": 2,
        "name": "Іван Мазепа",
        "biography": "Гетьман Лівобережної України, що боровся за автономію.",
        "birth_date": "1639-03-20",
        "death_date": "1709-09-22",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image": "https://uinp.gov.ua/storage/app/public/uploads/2019-03-20/15/JX01553086836SpF.jpeg"
    },
    {
        "id": 3,
        "name": "Тарас Шевченко",
        "biography": "Видатний український поет, художник і громадський діяч.",
        "birth_date": "1814-03-09",
        "death_date": "1861-03-10",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image": "https://knu.ua/img/kobzar.jpg"
    },
    {
        "id": 5,
        "name": "Ющенко Віктор",
        "biography": "Третій Президент України, обраний в 2005 році.",
        "birth_date": "1954-02-23",
        "death_date": null,
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_3-%D0%B3%D0%BE_%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B0_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D0%B0_%D0%AE%D1%89%D0%B5%D0%BD%D0%BA%D0%B0.jpeg"
    },
    {
        "id": 6,
        "name": "Скоропадський Павло",
        "biography": "Гетьман Української Держави в 1918 році.",
        "birth_date": "1873-05-03",
        "death_date": "1945-04-26",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pavlo_Skoropadsky_portrait%2C_colorized_by_Ruslan_Habanets.jpg/250px-Pavlo_Skoropadsky_portrait%2C_colorized_by_Ruslan_Habanets.jpg"
    },
    {
        "id": 8,
        "name": "Василь Стус",
        "biography": "Поет, правозахисник, який став символом боротьби за права людини в Україні.",
        "birth_date": "1938-01-06",
        "death_date": "1985-09-04",
        "created_at": "2024-10-06 09:45:35",
        "updated_at": "2024-10-06 09:45:35",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/db/EthnoCarpathians_22082017DolynaUA-26_Crop_and_fix.jpg"
    },
    {
        "id": 9,
        "name": "Ліна Костенко",
        "biography": "Відома українська поетеса, письменниця, публіцистка.",
        "birth_date": "1930-03-19",
        "death_date": null,
        "created_at": "2024-10-06 09:45:35",
        "updated_at": "2024-10-06 09:45:35",
        "image": "https://i.stopcor.org/person/2022/7/15/kostenko.jpg?size=1000x1000"
    },
    {
        "id": 10,
        "name": "Олександр Довженко",
        "biography": "Український кінорежисер, сценарист, один з засновників українського кіно.",
        "birth_date": "1894-09-10",
        "death_date": "1956-11-25",
        "created_at": "2024-10-06 09:45:35",
        "updated_at": "2024-10-06 09:45:35",
        "image": "https://uinp.gov.ua/storage/app/public/uploads/2019-11-27/11/SpU15748464144pY.jpeg"
    },
    {
        "id": 11,
        "name": "Сергій Жадан",
        "biography": "Сучасний український поет, прозаїк, перекладач.",
        "birth_date": "1974-08-23",
        "death_date": null,
        "created_at": "2024-10-06 09:45:35",
        "updated_at": "2024-10-06 09:45:35",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/2022.08.17._Serhiy_Zhadan_Photo_Mariusz_Kubik_08.JPG"
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
insertIfNotExists(db, persons, 'name');
module.exports = db;
