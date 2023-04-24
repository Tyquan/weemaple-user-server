import {describe, expect, test} from '@jest/globals';
import { signUserUp } from './signupController';

describe("signupController module", () => {
    test('empty/invalid signup', async() => {
        const emptySignup = await signUserUp('', '');

        expect(emptySignup).toEqual({email: '', password: '', success: false, status: 401, message: "You can not continue if one of the input fields are empty. Please enter the email and password"});
    });
});