"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const authLib_1 = require("./authLib");
(0, globals_1.describe)("prepareUserForDatabaseInsertion function", () => {
    const empty = (0, authLib_1.prepareUserForDatabaseInsertion)("", "");
    (0, globals_1.test)('Returns success: false on empty inputs', () => {
        (0, globals_1.expect)(empty).toEqual({ email: '', password: '', success: false, status: 401, message: "You can not continue if one of the input fields are empty. Please enter the email and password" });
    });
    (0, globals_1.test)('Vaidates and encrypts password inputs', () => {
        (0, globals_1.expect)((0, authLib_1.prepareUserForDatabaseInsertion)("test1@test.com", "test123")).not.toBe({ email: "", password: "", success: false, status: 401, message: "You can not continue if one of the input fields are empty. Please enter the email and password" });
    });
});
