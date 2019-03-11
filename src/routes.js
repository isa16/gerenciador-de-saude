const express = require('express');
const routes = express.Router();

const RemediosController = require('./controllers/RemediosController');

routes.get('/remedios', RemediosController.index);
routes.get('/remedios/:id', RemediosController.show);
routes.post('/remedios', RemediosController.store)
routes.put('/remedios/:id', RemediosController.update);
routes.delete('/remedios/:id', RemediosController.destroy);

const ConsultasController = require('./controllers/ConsultasController');

routes.get('/consultas', ConsultasController.index);
routes.get('/consultas/:id', ConsultasController.show);
routes.post('/consultas', ConsultasController.store)
routes.put('/consultas/:id', ConsultasController.update);
routes.delete('/consultas/:id', ConsultasController.destroy);

module.exports = routes;