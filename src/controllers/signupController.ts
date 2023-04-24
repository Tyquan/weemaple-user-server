import {prepareUserForDatabaseInsertion} from '../libs/authLib';
import { saveNewUserToMongodb } from '../libs/mongoLib';

export const signUserUp = async (email: string, password: string) => {
    let newUser = prepareUserForDatabaseInsertion(email, password);

    if (newUser.success == false || newUser.status !== 201) {
        return newUser;
    }

    let newSavedUser = await saveNewUserToMongodb(newUser);

    return newSavedUser;
};