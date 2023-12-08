var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const passport = require("passport");

require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const messageRouter = require('./routes/messages')
const logoutRouter = require('./routes/logout')
const joinclubRouter = require('./routes/joinclub')

var app = express();


const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(process.env.MongoDB)
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/sign-up', signupRouter);
app.use('/log-in', loginRouter)
app.use('/messages', messageRouter)
app.use('/logout', logoutRouter)
app.use('/joinclub', joinclubRouter)

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
