var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hilmiRouter = require('./routes/hilmi');
var nabilRouter = require('./routes/nabil');
var mulyaRouter = require('./routes/mulya');
var donasiRouter = require('./routes/donasi');
var travelRouter = require('./routes/travel');
var zaidanRouter = require('./routes/zaidan');
var rentalRouter = require('./routes/rental');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hilmi', hilmiRouter);
app.use('/nabil', nabilRouter);
app.use('/mulya', mulyaRouter);
app.use('/donasi', donasiRouter);
app.use('/travel', travelRouter);
app.use('/zaidan', zaidanRouter);
app.use('/rental', rentalRouter);

module.exports = app;
