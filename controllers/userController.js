const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const UserClass = require('./UserClass');
const MongoUser = require('../models/MongoUser');

const userController = {
    getAllUsers: asyncHandler(async () => {
        return [];
    }),
    postNewUser: asyncHandler(async (req, res) => {
        let newUser = new UserClass(req.body.email, req.body.password);
        if (newUser.checkForMissingInputs()) {
            res.status(500).json({ 'message': "Please provide an Email and Password"});
        }
        newUser.password = await newUser.encryptPassword(bcrypt.hash, 10);
        let savedUser = newUser.create();
        try {
            // mongodb user creation
            let finalUser = await new MongoUser(savedUser);
            finalUser.save();
            res.status(201).json({data: finalUser, message: `New User Created: ${finalUser}`})
        } catch(error) {
            res.status(500).json({ 'message': "Unable to save new user"});
        }
    }),
};

module.exports = userController;