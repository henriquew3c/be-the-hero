const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();


/**
 * Métodos HTTP
 * GET: Buscar uma informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parêmetros
 * Query Params: Parametros nomeados enviados na rota após ? ou &
 * Route Params: Utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: Mysql, sqllite, postgres, oracle, sql server
 * NoSql: MongoDB, CouchDB, etc
 */

/**
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where...
* Utilizaremos Query Builder: knexjs
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;