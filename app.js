const express = require('express');
const settings = require('./settings/appSettings');
const httpErrors = require('http-errors');
const path = require('path');

const indexRouter = require('./endpoints/indexRouter');

const app = express();
settings.configure(app);

app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public/images/fav', 'favicon.ico')));

// view engine setupnpm
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', indexRouter);
// Public Apis

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(httpErrors(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;