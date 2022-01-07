const express = require('express');

const UsersController = require('./controllers/UsersController');
const SugestionsController = require('./controllers/SugestionsController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/sugestions', SugestionsController.index);
routes.post('/sugestions', SugestionsController.create);
routes.delete('/sugestions/:id', SugestionsController.delete);
   
module.exports = routes