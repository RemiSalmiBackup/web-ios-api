const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const usersController = require('../controllers/usersController');

//Get all users
router.get('/', usersController.readAll)

//Add an user
router.post('/', jsonParser, usersController.create)

//Delete an user by his id
router.delete('/:idUser', usersController.delete)

//Get an user by his id 
router.get('/:idUser', usersController.read)

//Update an user by his id 
router.put('/:idUser',jsonParser, usersController.update)

//Login
router.post('/login',jsonParser, usersController.login)

//Logout
router.post('/:idUser',jsonParser, usersController.logout)

module.exports = router;