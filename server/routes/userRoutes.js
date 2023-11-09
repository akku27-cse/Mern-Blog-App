const express = require('express');
const { getAllUsers, registersController, logInController } = require('../controllers/userController');
const router = express.Router();


//get method all user
router.get('/all-users',getAllUsers)



//cretae user post
router.post('/register', registersController);



//create user post log in
router.post('/login', logInController);

module.exports = router;