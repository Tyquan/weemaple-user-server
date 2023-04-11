"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const authLib_1 = require("./authLib");
(0, globals_1.describe)("prepareUserForDatabaseInsertion function", () => {
    const empty = (0, authLib_1.prepareUserForDatabaseInsertion)("", "");
    (0, globals_1.test)('Returns success: false on empty inputs', () => {
        (0, globals_1.expect)(empty).toEqual({ email: '', password: '', success: false });
    });
    (0, globals_1.test)('Vaidates and encrypts password inputs', () => {
        (0, globals_1.expect)((0, authLib_1.prepareUserForDatabaseInsertion)("test1@test.com", "test123")).not.toBe({ email: "", password: "", success: true });
    });
});
