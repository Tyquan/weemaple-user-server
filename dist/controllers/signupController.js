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
exports.signUserUp = void 0;
const authLib_1 = require("../libs/authLib");
const mongoLib_1 = require("../libs/mongoLib");
const signUserUp = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    let newUser = (0, authLib_1.prepareUserForDatabaseInsertion)(email, password);
    if (newUser.success == false || newUser.status !== 201) {
        return newUser;
    }
    let newSavedUser = yield (0, mongoLib_1.saveNewUserToMongodb)(newUser);
    return newSavedUser;
});
exports.signUserUp = signUserUp;
