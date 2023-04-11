import express, { Express, Request, Response, NextFunction } from "express";
import AppSettings from "./settings/AppSettings";
import httpErrors from 'http-errors';

import indexRouter from "./router/indexRouter";
import authRouter from './router/authRouter';

const app: Express = express();

AppSettings.configure(app, express);

// Routes / APIs
app.use('/', indexRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(httpErrors(404));
});

// error handler
app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500);
  res.render('error');
});

export default app;
module.exports = app;