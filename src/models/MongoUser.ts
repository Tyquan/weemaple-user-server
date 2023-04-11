import { Schema, model } from 'mongoose';
import IUser from './IUser';

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String
    },
    middleInitial: {type: String},
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {type: String},
    userName: {
        type: String
    },
    refreshToken: [String],
    password: {
        type: String,
        required: true
    },
    lastLogin: {type: Date},
    intro: {type: String},
    profile: {type: String},
    creationDate: {
        type: Date,
        default: Date.now()
    },
    modifiedDate: Date
});

const MongoUser = model<IUser>("User", UserSchema);

export default MongoUser;