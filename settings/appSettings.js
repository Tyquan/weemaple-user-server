const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const corsOptions = require('./cors/corsOptions');


const appSettings = {
    configure : (app) =>
    {
        app.set('trust proxy', 1) // trust first proxy
        app.use(express.json());
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: false }));
        app.use(morgan('dev'));
    }
};

module.exports = appSettings;