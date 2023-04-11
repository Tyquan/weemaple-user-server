// const express = require('express');
import {Express} from 'express';
import morgan from 'morgan';
require('dotenv').config();
// const cors = require('cors');
import cors from 'cors';
//const path = require('path');
import path from 'path';
import MongooseConnection from './mongodb/MongooseConnection';
// const MongooseConnection = require('./mongodb/MongooseConnection');
const corsOptions = require('./cors/corsOptions');


class AppSettings {
    static configure(app: Express, express: any) {
        let mongooseDB: MongooseConnection = new MongooseConnection(process.env.DEV_MONGODB_DATABASE);
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
}

export default AppSettings;

// const appSettings = {
//     configure : (app: Express, express: Express) =>
//     {
//         let mongooseDB = new MongooseConnection(process.env.DEV_MONGODB_DATABASE);
//         mongooseDB.connect();
//         app.set('trust proxy', 1) // trust first proxy
//         app.use(express.json());
//         app.use(cors(corsOptions));
//         app.use(express.urlencoded({ extended: false }));
//         app.use(morgan('dev'));
//         app.use(express.static(path.join(__dirname, '../public')));
//         // app.use(favicon(path.join(__dirname, 'public/images/fav', 'favicon.ico')));

//         // view engine setupnpm
//         app.set('view engine', 'pug');
//         app.set('views', path.join(__dirname, '../views'));
//     }
// };

// export.default = appSettings;