"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    middleInitial: { type: String },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    mobile: { type: String },
    userName: {
        type: String
    },
    refreshToken: [String],
    password: {
        type: String
    },
    lastLogin: { type: Date },
    intro: { type: String },
    profile: { type: String },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    modifiedDate: Date
});
const MongoUser = (0, mongoose_1.model)("User", UserSchema);
exports.default = MongoUser;
