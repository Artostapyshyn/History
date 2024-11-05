const Datastore = require('nedb');
const db = new Datastore({ filename: './models/database/history_events.db', autoload: true, corruptAlertThreshold: 1 });

events = [
    {
        "id": 1,
        "title": "Переяславська рада",
        "description": "Об’єднання України з Московією.",
        "date": "1654-01-18",
        "location": "Переяслав",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image_url": "https://zaxid.net/resources/photos/news/1200x675_DIR/201904/1479000.jpg?202402163900"
    },
    {
        "id": 2,
        "title": "Битва під Полтавою",
        "description": "Визначальна битва між шведами та росіянами.",
        "date": "1709-07-08",
        "location": "Полтава",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image_url": "https://cdn.fakty.com.ua/wp-content/uploads/2021/07/29/Novyj-proekt-12.jpg"
    },
    {
        "id": 4,
        "title": "Перший Майдан",
        "description": "Акції протесту проти президента Януковича.",
        "date": "2004-11-22",
        "location": "Київ",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Joesjtsjenko_Marion_Kiev_2004.jpg"
    },
    {
        "id": 5,
        "title": "Другий Майдан",
        "description": "Революція Гідності 2014 року.",
        "date": "2013-11-21",
        "location": "Київ",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image_url": "https://glavcom.ua/img/article/6604/23_main-v1582101063.jpg"
    },
    {
        "id": 6,
        "title": "Проголошення УНР",
        "description": "Оголошення незалежності Української Народної Республіки.",
        "date": "1917-01-22",
        "location": "Київ, Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://www.uinp.gov.ua/storage/app/public/uploads/2019-11-20/10/d2b1574239270JDH.jpeg"
    },
    {
        "id": 7,
        "title": "Битва за Київ",
        "description": "Серія боїв за контроль над столицею України під час Другої світової війни.",
        "date": "1941-07-07",
        "location": "Київ, Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://media-stg.kyivcity.gov.ua/kyivcity/uploads/public/64d/11a/762/thumb_181109_800_600_0_0_auto.jpg"
    },
    {
        "id": 8,
        "title": "Визвольний рух в Україні",
        "description": "Рух за відновлення незалежності та суверенітету України в XX столітті.",
        "date": "1944-06-22",
        "location": "Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://lh3.googleusercontent.com/proxy/ydVt1dSitZNgkqNaAQPPgy3HRNiOUCy_Nd1BrklvTSad2ASijsg6QmNm44JHLGv5uOaDoeSEH8QJtKwjW6457RKSsMKq6R-EhwPU2SuNl4K3_WdiZkL18_R0n58_J2NIGIhcRA"
    },
    {
        "id": 12,
        "title": "Конфлікт на Сході України",
        "description": "Військовий конфлікт, що розпочався в 2014 році між українською армією та проросійськими сепаратистами.",
        "date": "2014-04-06",
        "location": "Східна Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://www.volynnews.com/files/news/2019/01-21/261404/189460.jpg"
    },
    {
        "id": 13,
        "title": "Революція Гідності",
        "description": "Протести проти рішення уряду скасувати угоду про асоціацію з ЄС.",
        "date": "2013-11-21",
        "location": "Київ, Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://www.khm.gov.ua/sites/default/files/470193947-e1519653914356.jpg"
    },
    {
        "id": 14,
        "title": "Розвиток української культури",
        "description": "Процес відродження української культури після здобуття незалежності.",
        "date": "1991-08-24",
        "location": "Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Embroidered_Ukrainian_Map.jpg/270px-Embroidered_Ukrainian_Map.jpg"
    },
    {
        "id": 15,
        "title": "Виставка українських художників",
        "description": "Виставка, що представляє українське мистецтво.",
        "date": "2023-04-15",
        "location": "Київ, Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://ukrinfo-data.s3.amazonaws.com/media/159978/611bc2297914b.jpg"
    },
    {
        "id": 16,
        "title": "Відродження національної ідентичності",
        "description": "Процес, що охоплює повернення до українських традицій та культури.",
        "date": "2014-01-01",
        "location": "Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://naurok.com.ua/uploads/files/991221/359738/413449_images/1.jpg"
    },
    {
        "id": 17,
        "title": "Формування національної свідомості",
        "description": "Розвиток національної свідомості серед українців.",
        "date": "1991-08-24",
        "location": "Україна",
        "created_at": "2024-10-06 09:43:26",
        "updated_at": "2024-10-06 09:43:26",
        "image_url": "https://www.alatyr-history.club/wp-content/uploads/2017/12/1488325199-9069.jpeg"
    },
    {
        "id": 20,
        "title": "Проголошення незалежності України",
        "description": "Акт проголошення незалежності України.",
        "date": "1991-08-24",
        "location": "Київ",
        "created_at": "2024-10-06 08:31:40",
        "updated_at": "2024-10-06 08:31:40",
        "image_url": "https://vechirniy.kyiv.ua/data/news/full/5d5d439c62f0a.jpg"
    }
];
const insertIfNotExists = (db, data, uniqueField) => {
    data.forEach(item => {
        db.findOne({ [uniqueField]: item[uniqueField] }, (err, existing) => {
            if (err) {
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
insertIfNotExists(db, events, 'title');
module.exports = db;
