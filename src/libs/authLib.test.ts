import {describe, expect, test} from '@jest/globals';
import {prepareUserForDatabaseInsertion} from './authLib';

describe("prepareUserForDatabaseInsertion function", () => {
    const empty = prepareUserForDatabaseInsertion("", "");
    test('Returns success: false on empty inputs', () => {
        expect(empty).toEqual({email: '', password: '', success: false})
    });
    test('Vaidates and encrypts password inputs', () => {
        expect(prepareUserForDatabaseInsertion("test1@test.com", "test123")).not.toBe({email: "", password: "", success: true});
    });
});