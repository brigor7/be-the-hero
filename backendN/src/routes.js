const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();
routes.use(express.json());

routes.get('/ongs', ongController.index);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email(),
      whatsapp: Joi.number().min(10),
      city: Joi.string().required(),
      uf: Joi.string().length(2),
    }),
  }),
  ongController.create
);
routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  profileController.get
);
routes.delete('/ongs/:id', ongController.delete);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  incidentController.index
);
routes.post('/incidents', incidentController.create);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  incidentController.delete
);

routes.post('/session', sessionController.create);

module.exports = routes;
