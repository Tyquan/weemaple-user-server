const express = require('express');
const indexRouter = express.Router();

indexRouter.get('^/$|/index(.html)?', (req, res) => {
    res.render('index');
});

indexRouter.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.render(404);
    } else if (req.accepts('json')) {
        res.json({message: '404 Route Not Found'})
    } else {
        res.type('txt').send('404 Route NOT FOUND')
    }
});

module.exports = indexRouter;