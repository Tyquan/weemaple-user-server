"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const signupController_1 = require("./signupController");
(0, globals_1.describe)("signupController module", () => {
    (0, globals_1.test)('empty/invalid signup', () => __awaiter(void 0, void 0, void 0, function* () {
        const emptySignup = yield (0, signupController_1.signUserUp)('', '');
        (0, globals_1.expect)(emptySignup).toEqual({ email: '', password: '', success: false, status: 401, message: "You can not continue if one of the input fields are empty. Please enter the email and password" });
    }));
});
