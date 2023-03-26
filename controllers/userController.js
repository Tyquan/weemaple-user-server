const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('./UserClass');



const userController = {
    getAllUsers: asyncHandler(async () => {
        return [];
    }),
    postNewUser: asyncHandler(async (req, res) => {
        let newUser = new User(req.body.email, req.body.password);
        if (newUser.checkForMissingInputs()) {
            res.status(500).json({ 'message': "Please provide an Email and Password"});
        }
        newUser.password = await newUser.encryptPassword(bcrypt.hash, 10);
        try {
            let savedUser = await newUser.save();
            res.status(201).json({data: savedUser, message: `New User Created: ${savedUser}`})
        } catch(error) {
            res.status(500).json({ 'message': "Unable to save new user"});
        }
    }),
};

module.exports = userController;