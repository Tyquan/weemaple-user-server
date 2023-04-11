import MongoUser from "../models/MongoUser";

// Save the given to the user database
export const saveNewUserToMongodb = async (newUser: any) => {
    let mongodbUser = new MongoUser(newUser);
    let newSavedUser = await mongodbUser.save();

    return newSavedUser;
}