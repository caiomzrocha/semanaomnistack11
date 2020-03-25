const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/* listar ongs */
routes.get('/ongs', OngController.index);

/* cadastrar ongs */
routes.post('/ongs', OngController.create);

/* listar casos */
routes.get('/incidents', IncidentController.index);

/* listar casos de uma ong */
routes.get('/profile', ProfileController.index);

/* criar caso */
routes.post('/incidents', IncidentController.create);

/* deletar caso */
routes.delete('/incidents/:id', IncidentController.delete);

/* login */
routes.post('/sessions', SessionController.create);

module.exports = routes;