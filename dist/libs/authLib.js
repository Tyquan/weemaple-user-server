"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareUserForDatabaseInsertion = void 0;
const bcrypt_1 = require("bcrypt");
// encrypts any string input given
const encryptInput = (input) => {
    let result = "";
    (0, bcrypt_1.genSalt)(10, (err, salt) => {
        if (err) {
            result = `error`;
        }
        (0, bcrypt_1.hash)(input, salt, (err, hash) => {
            if (err) {
                return `error`;
            }
            result = hash;
        });
    });
    return result;
};
// checks if email and password inputs are empty (boolean)
const isInputsEmpty = (email, password) => {
    if (email == "" || password == "")
        return true;
    return false;
};
const prepareUserForDatabaseInsertion = (email, password) => {
    // Return a "rejected (401 status)" object if arguments are empty
    if (isInputsEmpty(email, password)) {
        return {
            email: email,
            password: password,
            success: false,
            status: 401,
            message: "You can not continue if one of the input fields are empty. Please enter the email and password"
        };
    }
    ;
    // Return an encrypted and valid user object
    return {
        email: email,
        password: encryptInput(password),
        success: true,
        status: 201,
        message: "Data is valid, continue with the next service"
    };
};
exports.prepareUserForDatabaseInsertion = prepareUserForDatabaseInsertion;
