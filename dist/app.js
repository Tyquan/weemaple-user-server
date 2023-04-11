"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppSettings_1 = __importDefault(require("./settings/AppSettings"));
const http_errors_1 = __importDefault(require("http-errors"));
const indexRouter_1 = __importDefault(require("./router/indexRouter"));
const authRouter_1 = __importDefault(require("./router/authRouter"));
const app = (0, express_1.default)();
AppSettings_1.default.configure(app, express_1.default);
// Routes / APIs
app.use('/', indexRouter_1.default);
app.use('/auth', authRouter_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(500);
    res.render('error');
});
exports.default = app;
module.exports = app;
