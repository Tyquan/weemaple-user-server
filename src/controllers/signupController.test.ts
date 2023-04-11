import {describe, expect, test} from '@jest/globals';
import { signUserUp } from './signupController';

describe("signupController module", () => {
    test('signup function: returns null if data wasnt saved', async() => {
        const signup = await signUserUp('', '');
        expect(signup).toEqual(null);
    })
});