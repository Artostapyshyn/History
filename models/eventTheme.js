const Datastore = require('nedb');
const db = new Datastore({ filename: './database/history_theme_events.db', autoload: true, corruptAlertThreshold: 1 });
event_themes = [
    {"id":"F0AWodYEhmv3sp7J","theme_id":"6HEyosG3CTjEpYLn","event_id":"tS1WNzwLnkIcFuCF","_id":"05s5Ed5cwbAp9vJ8"},
    {"id":"0dZc6SaaFvsiJZk4","theme_id":"QlXt0pIM44UP1wN5","event_id":"gjeZaXEvv3fiOVqJ","_id":"7WbHeRL4gw4OhPZU"},
    {"id":"deFi1WIvcKJsJo5R","theme_id":"TsY8RE5Phhv2pS8I","event_id":"h8XhIjUEKMCWJdbG","_id":"DB5U8Cj9Uwsu5rNA"},
    {"id":"giIRJ1id6KGG6D8e","theme_id":"TsY8RE5Phhv2pS8I","event_id":"h8XhIjUEKMCWJdbG","_id":"DyRGpqB0oiYVllv7"},
    {"id":"clO1wsYQEhFtMssh","theme_id":"YLUZeQefer2vxG86","event_id":"jP2bkJatBtnPZrMZ","_id":"PbPxOVhLDQqfqD3Q"},
    {"id":"7FOm9Yip7crVVjUI","theme_id":"YLUZeQefer2vxG86","event_id":"deFi1WIvcKJsJo5R","_id":"SipVRKdKByxCoXgH"},
    {"id":"6HEyosG3CTjEpYLn","theme_id":"6HEyosG3CTjEpYLn","event_id":"tS1WNzwLnkIcFuCF","_id":"WqwmliapekEcEhBB"},
    {"id":"fRe7TBGKou3EQVGV","theme_id":"QlXt0pIM44UP1wN5","event_id":"gjeZaXEvv3fiOVqJ","_id":"bm3KGcpq9cIJeFYv"},
    {"id":"H3sOsB9FOamFFLTT","theme_id":"6HEyosG3CTjEpYLn","event_id":"6HEyosG3CTjEpYLn","_id":"iTmObDEz1qnZKGE6"},
    {"id":"YZrY3NBs78srEgzB","theme_id":"QlXt0pIM44UP1wN5","event_id":"gjeZaXEvv3fiOVqJ","_id":"mOexJxFtWwQIoWLf"},
    {"id":"JpRdPXrihR7Cld7A","theme_id":"QlXt0pIM44UP1wN5","event_id":"gjeZaXEvv3fiOVqJ","_id":"n9sST43g3556BeSA"},
    {"id":"2ce5zBkpEu6zdBsw","theme_id":"abIFLrx4AfG7Bq3Z","event_id":"JpRdPXrihR7Cld7A","_id":"soBXjMhxpO3257Os"}
];


const insertIfNotExists = (db, data, uniqueField) => {
    data.forEach(item => {
        db.findOne({ [uniqueField]: item[uniqueField] }, (err, existing) => {
            if (err) {
                console.error('Error checking for existing item:', err);
            } else if (!existing) {
                db.insert(item, (err) => {
                    if (err) {
                        console.error('Error inserting item:', err);
                    }
                });
            }
        });
    });
};
insertIfNotExists(db, event_themes, 'event_id');

module.exports = db;
