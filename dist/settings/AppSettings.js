"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
require('dotenv').config();
// const cors = require('cors');
const cors_1 = __importDefault(require("cors"));
//const path = require('path');
const path_1 = __importDefault(require("path"));
const MongooseConnection_1 = __importDefault(require("./mongodb/MongooseConnection"));
// const MongooseConnection = require('./mongodb/MongooseConnection');
const corsOptions = require('./cors/corsOptions');
class AppSettings {
    static configure(app, express) {
        let mongooseDB = new MongooseConnection_1.default(process.env.DEV_MONGODB_DATABASE);
        mongooseDB.connect();
        app.set('trust proxy', 1); // trust first proxy
        app.use(express.json());
        app.use((0, cors_1.default)(corsOptions));
        app.use(express.urlencoded({ extended: false }));
        app.use((0, morgan_1.default)('dev'));
        app.use(express.static(path_1.default.join(__dirname, '../public')));
        // app.use(favicon(path.join(__dirname, 'public/images/fav', 'favicon.ico')));
        // view engine setupnpm
        app.set('view engine', 'pug');
        app.set('views', path_1.default.join(__dirname, '../views'));
    }
}
exports.default = AppSettings;
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
