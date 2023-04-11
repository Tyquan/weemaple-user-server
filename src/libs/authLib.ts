import { genSalt, hash } from 'bcrypt';

// encrypts any string input given
const encryptInput = (input: string): string => {
    let result = "";
    genSalt(10, (err, salt: string) => {
        if (err) {
            result = `error`;
        }
        hash(input, salt, (err, hash: string) => {
            if (err) {
                return `error`;
            }
            result = hash;
        });
    });
    return result;
};

// checks if email and password inputs are empty (boolean)
const isInputsEmpty = (email: string, password: string): boolean => {
    if (email == "" || password == "") return true;
    return false;
}

export const prepareUserForDatabaseInsertion = (email: string, password: string) => {
    if (isInputsEmpty(email, password)) return {email: '', password: '', success: false};

    // encrypted and valid user object
    return {
        email: email,
        password: encryptInput(password),
        success: true
    }
}