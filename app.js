const express = require('express');
const settings = require('./settings/appSettings');
const httpErrors = require('http-errors');

const app = express();
settings.configure(app);

// Routes
app.use('/', require('./endpoints/indexRouter'));
app.use('/user', require('./endpoints/userEndpoint'));
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