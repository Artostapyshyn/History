var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/home');
var eventsRouter = require('./routes/events');
var personsRouter = require('./routes/persons');
var categoriesRouter = require('./routes/categories');
var themesRouter = require('./routes/themes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/persons', personsRouter);
app.use('/categories', categoriesRouter);
app.use('/themes', themesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
