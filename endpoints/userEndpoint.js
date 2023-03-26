const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', async (req, res) => {
    const allUsers = await userController.getAllUsers();
    console.log("get aLL USERS FIRED!!!!!!:", allUsers);
    res.status(200).json(allUsers);
})

router.post('/register', (req, res) => {
    userController.postNewUser(req, res);
});

module.exports = router;