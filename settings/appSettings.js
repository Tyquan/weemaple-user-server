const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const MongooseConnection = require('./mongodb/MongooseConnection');
const corsOptions = require('./cors/corsOptions');


const appSettings = {
    configure : (app) =>
    {
        let mongooseDB = new MongooseConnection(process.env.DEV_MONGODB_DATABASE);
        mongooseDB.connect();
        app.set('trust proxy', 1) // trust first proxy
        app.use(express.json());
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: false }));
        app.use(morgan('dev'));
        app.use(express.static(path.join(__dirname, '../public')));
        // app.use(favicon(path.join(__dirname, 'public/images/fav', 'favicon.ico')));

        // view engine setupnpm
        app.set('view engine', 'pug');
        app.set('views', path.join(__dirname, '../views'));
    }
};

module.exports = appSettings;