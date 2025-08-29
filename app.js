var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { editRouter, homeRouter, authRouter, mainRouter, userRouter, delRouter } = require('./routes')

const { UsersService } = require('./services/UsersService');
const { DelService } = require('./services/DelService');
const { EditService } = require('./services/EditService');
const { AuthService } = require('./services/AuthService');


var app = express();
app.locals.services = {
  usersService: new UsersService(),
  delService: new DelService(),
  ediitService: new EditService(),
  authService: new AuthService()
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/auth', authRouter)
app.use('/', mainRouter)
app.use('/user', editRouter)
app.use('/', userRouter);
app.use('/', delRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
