const express = require('express');
const morgan = require('morgan');
require('dotenv').config();


const appSettings = {
    configure : (app) =>
    {
        app.set('trust proxy', 1) // trust first proxy
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(morgan('dev'));
    }
};

module.exports = appSettings;